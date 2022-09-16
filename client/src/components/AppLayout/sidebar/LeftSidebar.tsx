import styled from 'styled-components';
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
  return (
    <Sidebar gridArea='leftSidebar'>
      <PurchaseTokensContainer>
        <PurchaseButton>Purchase Invite Token</PurchaseButton>
        <PurchaseButton>Purchase Like Tokens</PurchaseButton>
      </PurchaseTokensContainer>
    </Sidebar>
  );
};

export default LeftSidebar;
