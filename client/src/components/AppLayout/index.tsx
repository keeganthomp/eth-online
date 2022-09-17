import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import LeftSidebar from 'components/AppLayout/sidebar/LeftSidebar';
import RightSidebar from 'components/AppLayout/sidebar/RightSidebar';
import TopBar from './TopBar';

const NAVBAR_HEIGHT = '5rem';
const SIDEBAR_WIDTH = '26rem';

const Layout = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: ${NAVBAR_HEIGHT} 1fr; // navbar height
  grid-template-columns: ${SIDEBAR_WIDTH} 1fr ${SIDEBAR_WIDTH}; // sidebar width
  grid-template-areas:
    'topBar topBar topBar'
    'leftSidebar content rightSidebar';
`;
const Content = styled.div`
  grid-area: content;
  width: 100%;
  padding: 1rem;
  height: 100vh;
  overflow: auto;
  background-color: ${(props) => props.theme.darkBackground};
  border-radius: 5px;
`;

const AppLayout = () => {
  return (
    <Layout>
      <TopBar />
      <LeftSidebar />
      <Content>
        <Outlet />
      </Content>
      <RightSidebar />
    </Layout>
  );
};

export default AppLayout;
