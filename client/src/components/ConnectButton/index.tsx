/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import React from 'react';
import tokenBalancesState from 'state/tokenBalances';
import reach, { truncateAddress } from 'lib/reach';
import accountState from 'state/account';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Button from 'components/Button';

const AccountAddress = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const ConnectButton = () => {
  const [account, setAccount] = useRecoilState(accountState);
  const setTokBals = useSetRecoilState(tokenBalancesState);
  const [isGettingAccount, setIsGettingAccount] = React.useState(false);

  const handleConnect = async () => {
    if (account) return;
    try {
      setIsGettingAccount(true);
      const acc = await reach.stdlib.getDefaultAccount();
      const accForState = reach.formatAccount(acc);
      const tokBalances = await reach.getTokBalances(acc);
      setTokBals(tokBalances);
      setAccount(accForState);
      setIsGettingAccount(false);
    } catch (err: any) {
      setIsGettingAccount(false);
      console.log('Error connecting:', err);
    }
  };

  if (account) return <AccountAddress>{truncateAddress(account.address)}</AccountAddress>;
  return (
    <Button loading={isGettingAccount} onClick={handleConnect}>
      Connect
    </Button>
  );
};

export default ConnectButton;
