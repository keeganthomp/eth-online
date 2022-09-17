/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useState, ChangeEvent } from 'react';
import web3Storage from 'lib/web3Storage';
import { useRecoilValue } from 'recoil';
import accountState from 'state/account';
import { launchPostCtc } from 'lib/reach';
import Button from 'components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.textarea`
  padding: 0.5rem;
  resize: vertical;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border: none;
  outline: none;
`;
const SubmitBtn = styled.button`
  padding: 0.75rem 1rem;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.main};
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

const CreatePost = () => {
  const account = useRecoilValue(accountState);
  const [message, setMessage] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);
  const handlePost = async () => {
    if (!message || !account) {
      console.log('content missing. unable to post');
      return;
    }
    setSubmitting(true);
    try {
      const ctcAddress = await launchPostCtc(account);
      await web3Storage.uploadMessage({
        message,
        sender: account.address,
        contractAddress: ctcAddress
      });
    } catch (err: any) {
      console.log('Error creating post:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <TextArea
        placeholder='Write something interesting...'
        rows={8}
        cols={30}
        value={message}
        onChange={handleMessageChange}
      />
      <SubmitBtn onClick={handlePost} disabled={isSubmitting}>
        {isSubmitting ? 'Wait...' : 'Post'}
      </SubmitBtn>
    </Container>
  );
};

export default CreatePost;
