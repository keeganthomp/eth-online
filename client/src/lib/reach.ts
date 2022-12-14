/* eslint-disable no-unused-vars */
import { loadStdlib } from '@reach-sh/stdlib';
import * as postBackend from 'contracts/post.main.mjs';
import * as authBackend from 'contracts/auth.main.mjs';

const { REACT_APP_DISPENSER_CONTRACT } = process.env;

const reach = loadStdlib('ETH');

const createViewAccount = async () => {
  const acc = await reach.createAccount();
  return acc;
};

const LOCAL_STORAGE_ACCOUNT_KEY = 'account';

export const POLYGON_TESTNET_EXPLORER_BASE_URL = 'https://mumbai.polygonscan.com/address/';

export const getTokenIds = async (): Promise<{ inviteTokenId: string; likeTokenId: string }> => {
  const acc = await createViewAccount();
  const ctc = acc.contract(authBackend, REACT_APP_DISPENSER_CONTRACT);
  const [_, inviteTokenId] = await ctc.v.inviteToken();
  const [_a, likeTokenId] = await ctc.v.likeToken();
  return {
    inviteTokenId,
    likeTokenId
  };
};

export const getPostLikes = async (ctcAddress: string) => {
  const acc = await createViewAccount();
  const ctc = acc.contract(postBackend, ctcAddress);
  const [_, totLikes] = await ctc.v.likesReceived();
  return reach.bigNumberToNumber(totLikes);
};

export const launchPostCtc = async (acc: any) => {
  try {
    const { inviteTokenId, likeTokenId } = await getTokenIds();
    const ctc = acc.contract(postBackend);
    await reach.withDisconnect(() =>
      ctc.p.Creator({
        inviteToken: inviteTokenId,
        likeToken: likeTokenId,
        ready: reach.disconnect
      })
    );
    const ctcInfo = await ctc.getInfo();
    return ctcInfo;
  } catch {
    throw new Error('Failed');
  }
};

export const likePost = async (acc: any, ctcAddress: string) => {
  const ctc = acc.contract(postBackend, ctcAddress);
  try {
    await ctc.a.like();
  } catch {
    throw new Error('Failed');
  }
};

export const getInviteToken = async (acc: any) => {
  const ctc = acc.contract(authBackend, REACT_APP_DISPENSER_CONTRACT);
  try {
    const [_, areStillFree] = await ctc.v.areFreeInvitesAvailable();
    if (areStillFree) {
      await ctc.a.getInitialInvite();
    } else {
      await ctc.a.buyInviteTok();
    }
  } catch {
    throw new Error('Failed');
  }
};

export const getLikeTokens = async (acc: any) => {
  try {
    const ctc = acc.contract(authBackend, REACT_APP_DISPENSER_CONTRACT);
    await ctc.a.buyLikeTok();
  } catch {
    throw new Error('Failed');
  }
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
    const { inviteTokenId } = await getTokenIds();
    const rawBal = await account.balanceOf(inviteTokenId);
    const fmtBal = reach.bigNumberToNumber(rawBal);
    return fmtBal > 0;
  } catch {
    return false;
  }
};

export const getTokBalances = async (acc: any) => {
  const toks = await getTokenIds();
  const [invitTokBalBn, likeTokBalBn] = await acc.balancesOf([
    toks.inviteTokenId,
    toks.likeTokenId
  ]);
  const fmtInviteTokBal = reach.bigNumberToNumber(invitTokBalBn);
  const fmtlikeTokBal = reach.bigNumberToNumber(likeTokBalBn);
  return {
    inviteTokenBalance: fmtInviteTokBal,
    likeTokenBalance: fmtlikeTokBal
  };
};

export const truncateAddress = (address: string) => {
  const start = address.slice(0, 4);
  const end = address.slice(-4);
  return `${start}...${end}`;
};

export const goViewContract = (contractAddress: string) =>
  window.open(`${POLYGON_TESTNET_EXPLORER_BASE_URL}${contractAddress}`, '_blank');

const obj = {
  stdlib: reach,
  getAccountFromCache,
  launchPostCtc,
  checkInviteTok,
  getInviteToken,
  getTokenIds,
  getLikeTokens,
  getTokBalances,
  formatAccount,
  likePost,
  getPostLikes
};

export default obj;
