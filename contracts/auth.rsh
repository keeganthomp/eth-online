'reach 0.1';
'use strict';

const REQUIRED_INVITE_TOK_AMT = 1;
const MAX_INITIAL_INVITES = 1000;

const LIKE_BUNDLE_AMT = 100;

const INVITE_TOK_COST = 4;
const LIKE_BUNDLE_COST = 1;

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
    areFreeInvitesAvailable: Bool,
    inviteToksDistrbuted: UInt,
    likeToksDistributed: UInt,
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
  view.areFreeInvitesAvailable.set(true);

  const [invites, likeToks, inviteTokBuys, likeBundleBuys] = parallelReduce([
    0, 0, 0, 0,
  ])
    .define(() => {
      //views here
      view.inviteToksDistrbuted.set(invites);
      view.likeToksDistributed.set(likeToks);
      view.areFreeInvitesAvailable.set(invites < MAX_INITIAL_INVITES);
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
        const isBeyondInitialInvites = invites > MAX_INITIAL_INVITES;
        const balFromLikeToks = likeBundleBuys * LIKE_BUNDLE_COST;
        if (isBeyondInitialInvites) {
          const balFromInvites = inviteTokBuys * INVITE_TOK_COST;
          return balance() === balFromInvites + balFromLikeToks;
        } else {
          return balance() === balFromLikeToks;
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
          return [
            invites + 1,
            likeToks + LIKE_BUNDLE_AMT,
            inviteTokBuys,
            likeBundleBuys,
          ];
        },
      ];
    })
    .api_(api.buyInviteTok, () => {
      checkUsrAlreadyExist(this);
      chkCtcInviteTokBal();
      check(
        invites > MAX_INITIAL_INVITES,
        'you can still get a FREE invite token!'
      );
      return [
        [INVITE_TOK_COST, [0, inviteToken]],
        k => {
          transfer(REQUIRED_INVITE_TOK_AMT, inviteToken).to(this);
          Users.insert(this);
          k(null);
          return [
            invites + REQUIRED_INVITE_TOK_AMT,
            likeToks,
            inviteTokBuys + 1,
            likeBundleBuys,
          ];
        },
      ];
    })
    .api_(api.buyLikeTok, () => {
      chkCtcLikeTokBal();
      return [
        [LIKE_BUNDLE_COST, [REQUIRED_INVITE_TOK_AMT, inviteToken]],
        k => {
          transfer(REQUIRED_INVITE_TOK_AMT, inviteToken).to(this);
          transfer(LIKE_BUNDLE_AMT, likeToken).to(this);
          k(null);
          return [
            invites,
            likeToks + LIKE_BUNDLE_AMT,
            inviteTokBuys,
            likeBundleBuys + 1,
          ];
        },
      ];
    });

  commit();
});
