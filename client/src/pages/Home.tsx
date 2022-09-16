import styled from 'styled-components';
import Post from 'components/Post';
import postState from 'state/post';
import { useRecoilValue } from 'recoil';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  padding-bottom: 6rem;
`;

function Home() {
  const { posts, fetching } = useRecoilValue(postState);
  if (fetching) return <p>Loading...</p>;
  return (
    <Container>
      {posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </Container>
  );
}

export default Home;
