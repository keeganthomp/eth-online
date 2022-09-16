import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as authBAckend from './build/auth.main.mjs';

const POLYGON_TESTNET = 'https://rpc.ankr.com/polygon_mumbai';
const POLYGON_MAINNET = 'https://rpc-mainnet.matic.quiknode.pro';

// REMOVE BEFORE COMMIT
const SECRET = '';

const getAccFromSecret = async (
  message = 'Please paste the secret of the deployer:'
) => {
  //   const secret = await ask.ask(message);
  //   const fmtSecret = secret.replace(/,/g, '');
  const acc = await stdlib.newAccountFromSecret(SECRET);
  return acc;
};

export const stdlib = loadStdlib({
  ETH_NODE_URI: POLYGON_TESTNET,
});

const deployer = await getAccFromSecret();
const ctc = deployer.contract(authBAckend);

console.log('Deploying contract. Please Wait...');

// deploy contract
await stdlib.withDisconnect(() =>
  ctc.p.Creator({
    ready: stdlib.disconnect,
  })
);
// set global views for all functions to use
const ctcInfo = await ctc.getInfo();
console.log('Contract Deployed!', ctcInfo);
