'reach 0.1';
'use strict';

const REQUIRED_INVITE_TOK_AMT = 1;
const MAX_INITIAL_INVITES = 1000;

const LIKE_BUNDLE_AMT = 100;

const INVITE_TOK_COST = 4;
const LIKE_TOK_COST = 1;

export const main = Reach.App(() => {
  setOptions({ connectors: [ETH] });

  const C = Participant('Creator', {
    ready: Fun([], Null),
  });
  const api = API({
    getInitialInvite: Fun([], Null),
    buyInviteTok: Fun([], Null),
    buyLikeTok: Fun([], Null),
  });
  const view = View({
    inviteToken: Token,
    likeToken: Token,
    isUser: Fun([Address], Bool),
  });

  init();
  C.publish();

  const inviteToken = new Token({
    name: Bytes(32).pad('Invite Token'),
    symbol: Bytes(8).pad('INV'),
    supply: UInt.max,
    decimals: 0,
  });

  const likeToken = new Token({
    name: Bytes(32).pad('Like Token'),
    symbol: Bytes(8).pad('LIKE'),
    supply: UInt.max,
    decimals: 0,
  });

  C.interact.ready();

  const Users = new Set();

  view.inviteToken.set(inviteToken);
  view.likeToken.set(likeToken);
  view.isUser.set(u => Users.member(u));

  const [invites, likeToksPurchased] = parallelReduce([0, 0])
    .define(() => {
      //views here
      const checkUsrAlreadyExist = who => {
        check(
          !Users.member(who),
          'already received inital invite. You can purchase more like tokens tho :)'
        );
      };
      const chkCtcInviteTokBal = () => {
        check(
          balance(inviteToken) >= REQUIRED_INVITE_TOK_AMT,
          'not enough invite tokens'
        );
      };
      const chkCtcLikeTokBal = () => {
        check(balance(likeToken) >= LIKE_BUNDLE_AMT, 'not enough like tokens');
      };
      const chkCtcTokBal = () => {
        chkCtcInviteTokBal();
        chkCtcLikeTokBal();
      };
      const balanceChk = () => {
        const userCountAfterInitial = Users.Map.size() - MAX_INITIAL_INVITES;
        const isBeyondInitialInvites = invites > MAX_INITIAL_INVITES;
        const balFromInvites = userCountAfterInitial * INVITE_TOK_COST;
        const balFromLikeToks =
          (likeToksPurchased / LIKE_BUNDLE_AMT) * LIKE_TOK_COST;
        if (isBeyondInitialInvites) {
          return balance() === balFromInvites + balFromLikeToks;
        } else {
          return balance() === 0;
        }
      };
    })
    .invariant(balanceChk())
    .while(true)
    .paySpec([inviteToken])
    .api_(api.getInitialInvite, () => {
      check(invites < MAX_INITIAL_INVITES, 'initial invites gone');
      checkUsrAlreadyExist(this);
      chkCtcTokBal();
      return [
        [0, [0, inviteToken]],
        k => {
          Users.insert(this);
          transfer(REQUIRED_INVITE_TOK_AMT, inviteToken).to(this);
          transfer(LIKE_BUNDLE_AMT, likeToken).to(this);
          k(null);
          return [invites + REQUIRED_INVITE_TOK_AMT, likeToksPurchased];
        },
      ];
    })
    .api_(api.buyInviteTok, () => {
      const likeAmtToGive = LIKE_BUNDLE_AMT / 3;
      checkUsrAlreadyExist(this);
      chkCtcInviteTokBal();
      check(balance(likeToken) >= likeAmtToGive, 'not enough like tokens');
      check(
        invites > MAX_INITIAL_INVITES,
        'you can still get FREE invite and like tokens!'
      );
      return [
        [INVITE_TOK_COST, [0, inviteToken]],
        k => {
          transfer(REQUIRED_INVITE_TOK_AMT, inviteToken).to(this);
          transfer(likeAmtToGive, likeToken).to(this);
          Users.insert(this);
          k(null);
          return [invites, likeToksPurchased];
        },
      ];
    })
    .api_(api.buyLikeTok, () => {
      check(balance(likeToken) >= LIKE_BUNDLE_AMT, 'not enough like tokens');
      check(
        invites > MAX_INITIAL_INVITES,
        'you can still get FREE invite and like tokens!'
      );
      return [
        [LIKE_TOK_COST, [1, inviteToken]],
        k => {
          transfer(1, inviteToken).to(this);
          transfer(LIKE_BUNDLE_AMT, likeToken).to(this);
          k(null);
          return [invites, likeToksPurchased + LIKE_BUNDLE_AMT];
        },
      ];
    });

  commit();
});
