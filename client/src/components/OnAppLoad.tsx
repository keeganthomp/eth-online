/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import postState from 'state/post';
import tokenState from 'state/tokens';
import { useSetRecoilState } from 'recoil';
import web3Storage, { getMessageMetadata } from 'lib/web3Storage';
import { useEffect, useState } from 'react';
import { Message } from 'types';
import reach from 'lib/reach';

const OnAppLoad = () => {
  const [isInitialFetch, setInitial] = useState(true);
  const setPosts = useSetRecoilState(postState);
  const setTokenIds = useSetRecoilState(tokenState);

  const getMessages = async () => {
    setPosts(({ posts: currPosts }) => ({
      posts: currPosts,
      fetching: false
    }));
    try {
      const contents = await web3Storage.listContent();
      const tmp = [];
      for await (const upload of contents) {
        tmp.push(upload);
      }
      // sort messages oldest to newest
      const sortedContent = tmp.sort((a, b) => b.created.localeCompare(a.created));
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
          posts: currPosts.some((p) => p.id === newPost.id) ? currPosts : [...currPosts, newPost],
          fetching: false
        }));
      }
    } catch (err) {
      console.error('Error getting messages', err);
    }
  };

  // fetch messages on interval
  useEffect(() => {
    const myInterval = setInterval(getMessages, 5000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  const getTokIds = async () => {
    const toks = await reach.getTokenIds();
    setTokenIds(toks);
  };

  useEffect(() => {
    getTokIds();
  }, []);

  return null;
};

export default OnAppLoad;
