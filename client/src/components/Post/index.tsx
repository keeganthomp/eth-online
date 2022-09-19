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
import { useEffect, useState } from 'react';
import moment from 'moment';

const CARD_HEIGHT = '15rem';
const ICON_SIZE = 25;

const Container = styled.div`
  max-height: ${CARD_HEIGHT};
  background: ${(props) => props.theme.background};
  color: white;
  border-radius: 8px;
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
const LikeCount = styled.p`
  position: absolute;
  right: 0;
  font-weight: bold;
`;

const LikeContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
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
const MetaContainer = styled.div`
  color: lightgray;
  font-size: 12px;
`;

const Post = ({ sender, message, contractAddress, id, createdAt }: Message) => {
  const [fetchingLikes, setFetching] = useState(false);
  const [likes, setLikes] = useState<null | number>(null);
  const account = useRecoilValue(accountState);
  const setSigning = useSetRecoilState(signingState);
  const navigate = useNavigate();

  const goViewPost = () => navigate(`/post/${id}`);

  const asyncFetchLikes = async () => {
    setFetching(true);
    const likesFromCtc = await reach.getPostLikes(contractAddress);
    setLikes(likesFromCtc);
    setFetching(false);
  };

  useEffect(() => {
    // asyncFetchLikes();
  }, []);

  const likePost = async () => {
    if (!account) return;
    try {
      setSigning(true);
      await reach.likePost(account, contractAddress);
      if (likes) setLikes(likes + 1);
      setSigning(false);
    } catch {
      setSigning(false);
    }
  };

  const howLongAgo = moment(createdAt).startOf('hour').fromNow();

  return (
    <Container>
      <ContractInfo>
        <Link to={POLYGON_TESTNET_EXPLORER_BASE_URL + contractAddress}>
          {truncateAddress(contractAddress)}
        </Link>
      </ContractInfo>
      <Topbar>
        <ProfilePicture src='https://picsum.photos/200' />
        <MetaContainer>
          <p>@{truncateAddress(sender)}</p>
          <p>{howLongAgo}</p>
        </MetaContainer>
      </Topbar>
      <Content>{message}</Content>
      <LikeContainer onClick={likePost}>
        <HeartIcon size={ICON_SIZE} />
        <LikeCount>{likes}</LikeCount>
      </LikeContainer>
    </Container>
  );
};

export default Post;
