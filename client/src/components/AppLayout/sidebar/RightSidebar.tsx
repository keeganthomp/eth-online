import CreatePost from 'components/Post/CreatePost';
import accountState from 'state/account';
import tokenBalancesState from 'state/tokenBalances';
import { useRecoilValue } from 'recoil';
import Sidebar from './sidebar.component';

const RightSidebar = () => {
  const account = useRecoilValue(accountState);
  const { inviteTokenBalance } = useRecoilValue(tokenBalancesState);
  return (
    <Sidebar gridArea='rightSidebar'>{account && inviteTokenBalance > 0 && <CreatePost />}</Sidebar>
  );
};

export default RightSidebar;
