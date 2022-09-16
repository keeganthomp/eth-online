'reach 0.1';
'use strict';

export const main = Reach.App(() => {
  setOptions({ connectors: [ETH] });

  const C = Participant('Creator', {
    inviteToken: Token,
    likeToken: Token,
    ready: Fun([], Null),
  });
  const api = API({
    like: Fun([UInt], Null),
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
    .invariant(balance() == 0)
    .while(true)
    .api_(api.like, amt => {
      return [
        [
          [amt, likeToken],
          [1, partTok],
        ],
        k => {
          transfer(1, partTok).to(this);
          transfer(amt, likeToken).to(C);
          k(null);
          return [totalReceived + amt];
        },
      ];
    });

  commit();
});
