/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Post from 'components/Post';
import accountState from 'state/account';
import tokenBalancesState from 'state/tokenBalances';
import { useRecoilValue } from 'recoil';
import { InfinitySpin } from 'react-loader-spinner';
import useFetchMessages from 'hooks/useFetchMessages';
import { useEffect, useState } from 'react';
import { Message as MessageType } from 'types';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  padding-bottom: 6rem;
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Message = styled.p`
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  text-transform: uppercase;
  color: white;
`;

function Home() {
  const { fetchMessages, isFetching } = useFetchMessages();
  const { inviteTokenBalance } = useRecoilValue(tokenBalancesState);
  const account = useRecoilValue(accountState);
  const [posts, setPosts] = useState<any[]>([]);

  const asyncFetch = async () => {
    if (!account) return;
    const postsFromIpfs = await fetchMessages();
    setPosts(postsFromIpfs || []);
  };

  useEffect(() => {
    asyncFetch();
  }, [account]);

  if (!account)
    return (
      <MessageContainer>
        <Message>Please connect</Message>
      </MessageContainer>
    );
  if (account && !inviteTokenBalance)
    return (
      <MessageContainer>
        <Message>Purchase invite token to view content</Message>;
      </MessageContainer>
    );
  if (isFetching)
    return (
      <LoadingContainer>
        <InfinitySpin color='#fff' />
      </LoadingContainer>
    );
  const sortedPosts = posts.sort((a: MessageType, b: MessageType) =>
    b.createdAt.localeCompare(a.createdAt)
  );
  return (
    <Container>
      <button type='button' onClick={fetchMessages}>
        Refresh
      </button>
      {sortedPosts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </Container>
  );
}

export default Home;
