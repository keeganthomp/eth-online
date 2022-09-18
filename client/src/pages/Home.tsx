import styled from 'styled-components';
import Post from 'components/Post';
import postState from 'state/post';
import accountState from 'state/account';
import tokenBalancesState from 'state/tokenBalances';
import { useRecoilValue } from 'recoil';
import { InfinitySpin } from 'react-loader-spinner';

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
  const { posts, fetching } = useRecoilValue(postState);
  const { inviteTokenBalance } = useRecoilValue(tokenBalancesState);
  const account = useRecoilValue(accountState);
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
  if (fetching)
    return (
      <LoadingContainer>
        <InfinitySpin color='#fff' />
      </LoadingContainer>
    );
  return (
    <Container>
      {posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </Container>
  );
}

export default Home;
