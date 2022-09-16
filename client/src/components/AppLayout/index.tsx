import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import LeftSidebar from 'components/sidebar/LeftSidebar';
import RightSidebar from 'components/sidebar/RightSidebar';

const NAVBAR_HEIGHT = '5rem';
const SIDEBAR_WIDTH = '22rem';

const Layout = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: ${NAVBAR_HEIGHT} 1fr; // navbar height
  grid-template-columns: ${SIDEBAR_WIDTH} 1fr ${SIDEBAR_WIDTH}; // sidebar width
  grid-template-areas: 'leftSidebar content rightSidebar';
`;
const Content = styled.div`
  grid-area: content;
  width: 100%;
  padding: 1rem;
  height: 100vh;
  overflow: auto;
  background-color: #eeeeee;
`;

const AppLayout = () => {
  return (
    <Layout>
      <LeftSidebar />
      <Content>
        <Outlet />
      </Content>
      <RightSidebar />
    </Layout>
  );
};

export default AppLayout;
