import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi';

const ICON_SIZE = 25;

const Container = styled.div`
  background: white;
  border-radius: 5px;
`;
const Topbar = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;
const ProfilePicture = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
const Content = styled.div`
  padding: 10px;
`;
const Timestamp = styled.p`
  color: lightgray;
  padding: 10px;
`;
const Actions = styled.div`
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 10px 0;
  > * {
    margin: 0 10px;
    cursor: pointer;
  }
`;

const PostDetailPage = () => {
  const { postId } = useParams();
  console.log('post id', postId);
  return (
    <Container>
      <Topbar>
        <ProfilePicture src='https://picsum.photos/200' />
        <p>username</p>
      </Topbar>
      <Content>
        <p>some pcool post content is going in here.</p>
      </Content>
      <Timestamp>4:00AM Sep 5, 2022</Timestamp>
      <Actions>
        <HiOutlineHeart size={ICON_SIZE} />
      </Actions>
    </Container>
  );
};

export default PostDetailPage;
