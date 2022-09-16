/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import reach, { cacheAccount, formatAccount } from 'lib/reach';
import accountState from 'state/account';
import { useRecoilState } from 'recoil';

const Button = styled.button``;

const ConnectButton = () => {
  const [account, setAccount] = useRecoilState(accountState);

  const handleConnect = async () => {
    if (account) return;
    try {
      // TODO check for invite token in wallet
      const acc = await reach.stdlib.getDefaultAccount();
      const accForState = formatAccount(acc);
      setAccount(accForState);
    } catch (err: any) {
      console.log('Error connecting:', err);
    }
  };

  return <Button onClick={handleConnect}>{account?.address || 'Connect'}</Button>;
};

export default ConnectButton;
