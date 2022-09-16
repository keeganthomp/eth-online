import { atom } from 'recoil';

const accountState = atom({
  key: 'account',
  default: null as any
});

export default accountState;
