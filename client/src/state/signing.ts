import { atom } from 'recoil';

const signingState = atom({
  key: 'signing',
  default: false
});

export default signingState;
