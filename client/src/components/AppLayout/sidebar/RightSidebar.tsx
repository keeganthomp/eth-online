import CreatePost from 'components/Post/CreatePost';
import Sidebar from './sidebar.component';

const RightSidebar = () => {
  return (
    <Sidebar gridArea='rightSidebar'>
      <CreatePost />
    </Sidebar>
  );
};

export default RightSidebar;
