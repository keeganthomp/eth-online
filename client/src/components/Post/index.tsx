/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { HiOutlineHeart } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Message } from 'types';
import reach, { POLYGON_TESTNET_EXPLORER_BASE_URL } from 'lib/reach';
import accountState from 'state/account';
import { useRecoilValue } from 'recoil';

const CARD_HEIGHT = '15rem';
const ICON_SIZE = 25;

const Container = styled.div`
  max-height: ${CARD_HEIGHT};
  background: white;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr 2.5rem;
`;

const Topbar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const ProfilePicture = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
const ContractLink = styled.a`
  color: blue;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 10px;
`;

const HeartIcon = styled(HiOutlineHeart)``;

const LikeContainer = styled.div`
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    margin: 0 10px;
    cursor: pointer;
  }
  &:hover {
    background-color: red;
    cursor: pointer;
    ${HeartIcon} {
      color: white;
    }
  }
`;

const Post = ({ sender, message, contractAddress, id }: Message) => {
  const account = useRecoilValue(accountState);
  const navigate = useNavigate();

  const goViewPost = () => navigate(`/post/${id}`);

  const goViewContract = () =>
    window.open(`${POLYGON_TESTNET_EXPLORER_BASE_URL}${contractAddress}`, '_blank');

  const likePost = () => {
    if (!account) return;
    reach.likePost(account, contractAddress);
  };

  return (
    <Container>
      <Topbar>
        <ProfilePicture src='https://picsum.photos/200' />
        <p>{sender}</p>
      </Topbar>
      <Content>
        <p>{message}</p>
        <p>
          contract: <ContractLink onClick={goViewContract}>{contractAddress}</ContractLink>
        </p>
      </Content>
      <LikeContainer onClick={likePost}>
        <HeartIcon size={ICON_SIZE} />
      </LikeContainer>
    </Container>
  );
};

export default Post;
