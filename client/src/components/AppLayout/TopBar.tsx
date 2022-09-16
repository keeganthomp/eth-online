import styled from 'styled-components';
import ConnectButton from 'components/ConnectButton';
import accountState from 'state/account';
import { useRecoilValue } from 'recoil';

const TopBarContainer = styled.div`
  grid-area: topBar;
  display: grid;
  grid-template-columns: 22rem 1fr 22rem;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
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
      <LogoContainer>
        <p>Ixnay</p>
      </LogoContainer>
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
      <div />
    </TopBarContainer>
  );
};

export default TopBar;
