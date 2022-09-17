import styled from 'styled-components';
import ConnectButton from 'components/ConnectButton';
import accountState from 'state/account';
import tokenState from 'state/tokens';
import tokenBalancesState from 'state/tokenBalances';
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
const TokIdContainer = styled.div`
  font-size: 12px;
`;

const TopBar = () => {
  const account = useRecoilValue(accountState);
  const tokenIds = useRecoilValue(tokenState);
  const { likeTokenBalance } = useRecoilValue(tokenBalancesState);
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
              Like tokens: <BalAmount>{likeTokenBalance}</BalAmount>
            </Balance>
          </BalanceContainer>
        )}
      </WalletContainer>
      <TokIdContainer>
        <p>Invite Token Id: {tokenIds.inviteTokenId}</p>
        <p>Like Token Id: {tokenIds.likeTokenId}</p>
      </TokIdContainer>
    </TopBarContainer>
  );
};

export default TopBar;
