import styled from 'styled-components';
import ConnectButton from 'components/ConnectButton';
import accountState from 'state/account';
import { useRecoilValue } from 'recoil';

const TopBarContainer = styled.div`
  grid-area: topBar;
`;
const WalletContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
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

const TopBar = () => {
  const account = useRecoilValue(accountState);
  return (
    <TopBarContainer>
      <WalletContainer>
        <ConnectButton />
        {account && (
          <BalanceContainer>
            <Balance>
              Like tokens: <BalAmount>34</BalAmount>
            </Balance>
          </BalanceContainer>
        )}
      </WalletContainer>
    </TopBarContainer>
  );
};

export default TopBar;
