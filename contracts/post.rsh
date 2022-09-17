'reach 0.1';
'use strict';

const DEFAULT_LIKE_AMT = 1;
const REQUIRED_INVITE_TOKEN_AMT = 1;

export const main = Reach.App(() => {
  setOptions({ connectors: [ETH] });

  const C = Participant('Creator', {
    inviteToken: Token,
    likeToken: Token,
    ready: Fun([], Null),
  });
  const api = API({
    like: Fun([], Null),
  });
  const view = View({
    likesReceived: UInt,
  });
  init();

  C.only(() => {
    const partTok = declassify(interact.inviteToken);
    const likeToken = declassify(interact.likeToken);
    check(partTok !== likeToken);
  });

  C.publish(partTok, likeToken);
  assert(partTok !== likeToken);
  C.interact.ready();

  const [totalReceived] = parallelReduce([0])
    .define(() => {
      view.likesReceived.set(totalReceived);
    })
    .invariant(balance() == 0)
    .while(true)
    .api_(api.like, () => {
      return [
        [
          [DEFAULT_LIKE_AMT, likeToken],
          [REQUIRED_INVITE_TOKEN_AMT, partTok],
        ],
        k => {
          transfer(REQUIRED_INVITE_TOKEN_AMT, partTok).to(this);
          transfer(DEFAULT_LIKE_AMT, likeToken).to(C);
          k(null);
          return [totalReceived + DEFAULT_LIKE_AMT];
        },
      ];
    });

  commit();
});
