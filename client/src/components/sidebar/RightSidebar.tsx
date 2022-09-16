import ConnectButton from 'components/ConnectButton';
import styled from 'styled-components';
import CreatePost from 'components/Post/CreatePost';
import Sidebar from './sidebar.component';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`;

const RightSidebar = () => {
  return (
    <Sidebar gridArea='rightSidebar'>
      <ButtonContainer>
        <ConnectButton />
      </ButtonContainer>
      <CreatePost />
    </Sidebar>
  );
};

export default RightSidebar;
