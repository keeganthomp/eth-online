import ConnectButton from 'components/ConnectButton';
import styled from 'styled-components';
import CreatePost from 'components/Post/CreatePost';
import Sidebar from './sidebar.component';

const WalletContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 5rem;
`;
const BalanceContainer = styled.div`
  margin-top: 0.25rem;
`;
const Balance = styled.p`
  font-size: 14px;
  font-style: italic;
`;
const BalAmount = styled.span`
  font-weight: bold;
`;

const RightSidebar = () => {
  return (
    <Sidebar gridArea='rightSidebar'>
      <WalletContainer>
        <ConnectButton />
        <BalanceContainer>
          <Balance>
            Like tokens: <BalAmount>34</BalAmount>
          </Balance>
        </BalanceContainer>
      </WalletContainer>
      <CreatePost />
    </Sidebar>
  );
};

export default RightSidebar;
