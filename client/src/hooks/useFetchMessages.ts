/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import web3Storage, { getMessageMetadata } from 'lib/web3Storage';
import { Message } from 'types';
import { useState } from 'react';

const useFetchMessages = () => {
  const [isFetching, setFetching] = useState(false);
  const fetchMessages = async () => {
    setFetching(true);
    const posts = [];
    try {
      const contents = await web3Storage.listContent();
      // sort messages oldest to newest
      for await (const upload of contents) {
        const { sender, message, contractAddress }: Message = await getMessageMetadata(upload.cid);
        const newPost = {
          sender,
          message,
          contractAddress,
          createdAt: upload.created,
          id: upload.cid
        };
        posts.push(newPost);
      }
      setFetching(false);
      return posts;
    } catch (err) {
      console.error('Error getting messages', err);
    }
  };

  return { fetchMessages, isFetching };
};

export default useFetchMessages;
