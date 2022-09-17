/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import tokenBalancesState from 'state/tokenBalances';
import reach from 'lib/reach';
import accountState from 'state/account';
import { useRecoilState, useSetRecoilState } from 'recoil';

const Button = styled.button``;

const ConnectButton = () => {
  const [account, setAccount] = useRecoilState(accountState);
  const setTokBals = useSetRecoilState(tokenBalancesState);

  const handleConnect = async () => {
    if (account) return;
    try {
      // TODO check for invite token in wallet
      const acc = await reach.stdlib.getDefaultAccount();
      const accForState = reach.formatAccount(acc);
      setAccount(accForState);
      const tokBalances = await reach.getTokBalances(acc);
      setTokBals(tokBalances);
    } catch (err: any) {
      console.log('Error connecting:', err);
    }
  };

  return <Button onClick={handleConnect}>{account?.address || 'Connect'}</Button>;
};

export default ConnectButton;
