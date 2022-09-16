/* eslint-disable no-unused-vars */
import { loadStdlib } from '@reach-sh/stdlib';
import * as postBackend from 'contracts/post.main.mjs';

const reach = loadStdlib('ETH');

const INVITE_TOKEN = '0xB04a5c6d9d46F7099E51350445d6DDF175D13241';
const LIKE_TOKEN = '0x222e5CCbE1faf52Efc1b7f26a95B6604d8f6760c';

const LOCAL_STORAGE_ACCOUNT_KEY = 'account';

export const POLYGON_TESTNET_EXPLORER_BASE_URL = 'https://mumbai.polygonscan.com/address/';

export const launchPostCtc = async (acc: any) => {
  const ctc = acc.contract(postBackend);
  await reach.withDisconnect(() =>
    ctc.p.Creator({
      inviteToken: INVITE_TOKEN,
      likeToken: LIKE_TOKEN,
      ready: reach.disconnect
    })
  );
  const ctcInfo = await ctc.getInfo();
  return ctcInfo;
};

export const formatAccount = (acc: any) => {
  const address = acc?.networkAccount.address;
  delete acc.networkAccount;
  acc.address = address;
  return acc;
};

const getAccountFromCache = () => localStorage.getItem(LOCAL_STORAGE_ACCOUNT_KEY);

export const cacheAccount = (acc: any) => {
  localStorage.setItem(LOCAL_STORAGE_ACCOUNT_KEY, JSON.stringify(acc.networkAccount.address));
};

export const checkInviteTok = async (account: any): Promise<boolean> => {
  try {
    const rawBal = await account.balanceOf(INVITE_TOKEN);
    const fmtBal = reach.bigNumberToNumber(rawBal);
    return fmtBal > 0;
  } catch {
    return false;
  }
};

const obj = {
  stdlib: reach,
  getAccountFromCache,
  launchPostCtc,
  checkInviteTok
};

export default obj;
