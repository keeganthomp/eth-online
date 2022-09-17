/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { HiOutlineHeart } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Message } from 'types';
import reach, { POLYGON_TESTNET_EXPLORER_BASE_URL, truncateAddress } from 'lib/reach';
import accountState from 'state/account';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Link from 'components/Link';
import signingState from 'state/signing';

const CARD_HEIGHT = '15rem';
const ICON_SIZE = 25;

const Container = styled.div`
  max-height: ${CARD_HEIGHT};
  background: ${(props) => props.theme.darkestBackground};
  color: white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr 1.75rem;
  position: relative;
`;

const Topbar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 0 10px;
`;
const ProfilePicture = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
const Content = styled.p`
  padding: 1.75rem 10px;
`;

const HeartIcon = styled(HiOutlineHeart)``;
const ContractInfo = styled.p`
  font-size: 12px;
  position: absolute;
  top: 3px;
  right: 6px;
`;

const LikeContainer = styled.div`
  background-color: ${(props) => props.theme.red};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: opacity 0.2s;
  > * {
    margin: 0 10px;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
    overflow: hidden;
    cursor: pointer;
    ${HeartIcon} {
      color: white;
    }
  }
`;

const Post = ({ sender, message, contractAddress, id }: Message) => {
  const account = useRecoilValue(accountState);
  const setSigning = useSetRecoilState(signingState);
  const navigate = useNavigate();

  const goViewPost = () => navigate(`/post/${id}`);

  const likePost = async () => {
    if (!account) return;
    try {
      setSigning(true);
      await reach.likePost(account, contractAddress);
    } catch {
      setSigning(false);
    }
  };

  return (
    <Container>
      <ContractInfo>
        <Link to={POLYGON_TESTNET_EXPLORER_BASE_URL + contractAddress}>
          {truncateAddress(contractAddress)}
        </Link>
      </ContractInfo>
      <Topbar>
        <ProfilePicture src='https://picsum.photos/200' />
        <p>{truncateAddress(sender)}</p>
      </Topbar>
      <Content>{message}</Content>
      <LikeContainer onClick={likePost}>
        <HeartIcon size={ICON_SIZE} />
      </LikeContainer>
    </Container>
  );
};

export default Post;
