import tokenState from 'state/tokens';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import reach from 'lib/reach';

const OnAppLoad = () => {
  const setTokenIds = useSetRecoilState(tokenState);

  const getTokIds = async () => {
    const toks = await reach.getTokenIds();
    setTokenIds(toks);
  };

  useEffect(() => {
    getTokIds();
  }, []);

  return null;
};

export default OnAppLoad;
