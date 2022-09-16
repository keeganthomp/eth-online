import { atom } from 'recoil';
import { Message } from 'types';

const postState = atom({
  key: 'post',
  default: {
    posts: [] as Message[],
    fetching: false
  }
});

export default postState;
