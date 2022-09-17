import styled from 'styled-components';
import ConnectButton from 'components/ConnectButton';
import accountState from 'state/account';
import tokenBalancesState from 'state/tokenBalances';
import { useRecoilValue } from 'recoil';

const TopBarContainer = styled.div`
  grid-area: topBar;
  display: grid;
  grid-template-columns: 26rem 1fr 26rem;
  background: ${(props) => props.theme.darkestBackground};
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  color: white;
`;
const BalAmount = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
const TokBalContainer = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.p`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 22px;
`;

const TopBar = () => {
  const account = useRecoilValue(accountState);
  const { likeTokenBalance } = useRecoilValue(tokenBalancesState);
  return (
    <TopBarContainer>
      <LogoContainer>
        <Text>Ixnay</Text>
      </LogoContainer>
      <WalletContainer>
        <ConnectButton />
      </WalletContainer>
      <TokBalContainer>
        {account && (
          <BalanceContainer>
            <Balance>
              Like token balance: <BalAmount>{likeTokenBalance}</BalAmount>
            </Balance>
          </BalanceContainer>
        )}
      </TokBalContainer>
    </TopBarContainer>
  );
};

export default TopBar;
