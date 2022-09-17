/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import accountState from 'state/account';
import tokenState from 'state/tokens';
import { MdGeneratingTokens, MdOutlineGeneratingTokens } from 'react-icons/md';
import reach, { truncateAddress, POLYGON_TESTNET_EXPLORER_BASE_URL } from 'lib/reach';
import Link from 'components/Link';
import tokenBalancesState from 'state/tokenBalances';
import { useRecoilValue, useRecoilState } from 'recoil';

import Sidebar from './sidebar.component';

const PurchaseTokensContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
const InviteTokenIcon = styled(MdGeneratingTokens)`
  margin-right: 3px;
`;
const LikeTokenIcon = styled(MdOutlineGeneratingTokens)`
  margin-right: 3px;
`;

const PurchaseButton = styled.p`
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 14px;
  font-size: 20px;
  padding: 0.75rem 1rem;
  &:hover {
    background: #333333;
  }
`;
const Text = styled.p`
  color: white;
  margin-top: 3px;
`;
const ContractInfoContainer = styled.div`
  font-size: 12px;
  position: absolute;
  bottom: 0.5rem;
`;

const LeftSidebar = () => {
  const account = useRecoilValue(accountState);
  const tokenIds = useRecoilValue(tokenState);
  const [tokBals, setTokBals] = useRecoilState(tokenBalancesState);

  const handleGetInviteToken = async () => {
    if (!account) return;
    await reach.getInviteToken(account);
    setTokBals({ ...tokBals, inviteTokenBalance: tokBals.inviteTokenBalance + 1 });
  };

  const handleGetLikeTokens = async () => {
    if (!account) return;
    await reach.getLikeTokens(account);
    setTokBals({ ...tokBals, likeTokenBalance: tokBals.likeTokenBalance + 100 });
  };

  return (
    <Sidebar gridArea='leftSidebar'>
      <PurchaseTokensContainer>
        {account && !tokBals.inviteTokenBalance && (
          <PurchaseButton onClick={handleGetInviteToken}>
            <InviteTokenIcon />
            Purchase Invite Token
          </PurchaseButton>
        )}
        {account && tokBals.inviteTokenBalance && (
          <PurchaseButton style={{ marginTop: '3px' }} onClick={handleGetLikeTokens}>
            <LikeTokenIcon />
            Purchase Like Tokens
          </PurchaseButton>
        )}
      </PurchaseTokensContainer>
      {account && tokenIds.inviteTokenId && tokenIds.likeTokenId && (
        <ContractInfoContainer>
          <Text>
            Invite Token Id:{' '}
            <Link to={POLYGON_TESTNET_EXPLORER_BASE_URL + tokenIds.inviteTokenId}>
              {truncateAddress(tokenIds.inviteTokenId)}
            </Link>
          </Text>
          <Text>
            Like Token Id:{' '}
            <Link to={POLYGON_TESTNET_EXPLORER_BASE_URL + tokenIds.likeTokenId}>
              {truncateAddress(tokenIds.likeTokenId)}
            </Link>
          </Text>
        </ContractInfoContainer>
      )}
    </Sidebar>
  );
};

export default LeftSidebar;
