import styled from 'styled-components';
import reach from 'lib/reach';
import accountState from 'state/account';
import { useRecoilValue } from 'recoil';

import Sidebar from './sidebar.component';

const PurchaseTokensContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;
const PurchaseButton = styled.button`
  padding: 0.5rem 0;
  cursor: pointer;
`;

const LeftSidebar = () => {
  const account = useRecoilValue(accountState);

  const handleGetInviteToken = () => {
    if (!account) return;
    reach.getInviteToken(account);
  };

  const handleGetLikeTokens = () => {
    if (!account) return;
    reach.getLikeTokens(account);
  };

  return (
    <Sidebar gridArea='leftSidebar'>
      <PurchaseTokensContainer>
        <PurchaseButton onClick={handleGetInviteToken}>Purchase Invite Token</PurchaseButton>
        <PurchaseButton onClick={handleGetLikeTokens}>Purchase Like Tokens</PurchaseButton>
      </PurchaseTokensContainer>
    </Sidebar>
  );
};

export default LeftSidebar;
