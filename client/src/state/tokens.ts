import { atom } from 'recoil';

const tokenState = atom({
  key: 'tokens',
  default: {
    inviteTokenId: '',
    likeTokenId: ''
  }
});

export default tokenState;
