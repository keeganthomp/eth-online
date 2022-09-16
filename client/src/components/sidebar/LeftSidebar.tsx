import styled from 'styled-components';
import Sidebar from './sidebar.component';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 100%;
`;

const LeftSidebar = () => {
  return (
    <Sidebar gridArea='leftSidebar'>
      <LogoContainer>
        <p>Logo</p>
      </LogoContainer>
    </Sidebar>
  );
};

export default LeftSidebar;
