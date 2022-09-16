import { loadStdlib } from '@reach-sh/stdlib';
import * as postBackend from './build/post.main.mjs';
import * as authBackend from './build/auth.main.mjs';

// random like token amount = like tokens
const LIKE_AMT = 12;

const stdlib = loadStdlib('ETH');
const bal = stdlib.parseCurrency(800);

// creating three different types of accounts/users
const [authDeployer, poster, user] = await stdlib.newTestAccounts(3, bal);

// deploy auth contract
const authCtc = authDeployer.contract(authBackend);
await stdlib.withDisconnect(() =>
  authCtc.p.Creator({
    ready: stdlib.disconnect,
  })
);
const authCtcInfo = await authCtc.getInfo();
console.log('Auth contract deployed!');

// getting tokens from auth contract views
const [_a, inviteToken] = await authCtc.v.inviteToken();
const [_b, likeToken] = await authCtc.v.likeToken();

// deploy post contract
const postCtc = poster.contract(postBackend);
await stdlib.withDisconnect(() =>
  postCtc.p.Creator({
    inviteToken,
    likeToken,
    ready: stdlib.disconnect,
  })
);
const postCtcInfo = await postCtc.getInfo();
console.log('Post contract deployed!');

// get user invite tokens which gives them like tokens
const uerAuthCtc = user.contract(authBackend, authCtcInfo);
await uerAuthCtc.a.getInitialInvite();
console.log('User received invite token along with like tokens!')

// like a post
const liketCtc = user.contract(postBackend, postCtcInfo);
await liketCtc.a.like(LIKE_AMT);
console.log(`User Liked a post with ${LIKE_AMT} likes!`);
