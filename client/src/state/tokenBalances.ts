import { atom } from 'recoil';

const tokenBalancesState = atom({
  key: 'tokBalances',
  default: {
    inviteTokenBalance: 0,
    likeTokenBalance: 0
  }
});

export default tokenBalancesState;
