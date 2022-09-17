/* eslint-disable no-restricted-syntax */
import postState from 'state/post';
import tokenState from 'state/tokens';
import { useSetRecoilState } from 'recoil';
import web3Storage, { getMessageMetadata } from 'lib/web3Storage';
import { useEffect } from 'react';
import { Message } from 'types';
import reach from 'lib/reach';

const OnAppLoad = () => {
  const setPosts = useSetRecoilState(postState);
  const setTokenIds = useSetRecoilState(tokenState);

  const getMessages = async () => {
    setPosts(({ posts: currPosts }) => ({
      posts: currPosts,
      fetching: true
    }));
    try {
      const contents = await web3Storage.listContent();
      const tmp = [];
      for await (const upload of contents) {
        tmp.push(upload);
      }
      // sort messages oldest to newest
      const sortedContent = tmp.sort((a, b) => a.created.localeCompare(b.created));
      for await (const upload of sortedContent) {
        const { sender, message, contractAddress }: Message = await getMessageMetadata(upload.cid);
        const newPost = {
          sender,
          message,
          contractAddress,
          createdAt: upload.created,
          id: upload.cid
        };
        setPosts(({ posts: currPosts }) => ({
          posts: [...currPosts, newPost],
          fetching: false
        }));
      }
    } catch (err) {
      console.error('Error getting messages', err);
    }
  };

  const getTokIds = async () => {
    const toks = await reach.getTokenIds();
    setTokenIds(toks);
  };

  useEffect(() => {
    getMessages();
    getTokIds();
  }, []);

  return null;
};

export default OnAppLoad;
