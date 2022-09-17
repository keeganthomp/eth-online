import ReactModal from 'react-modal';
import styled from 'styled-components';
import signingImage from 'assets/signing-image.svg';
import signingState from 'state/signing';
import { useRecoilValue } from 'recoil';

const Container = styled.div`
  margin-top: 4rem;
`;
const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;
const Message = styled.p`
  text-align: center;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 25rem;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    width: '40rem',
    height: '40rem'
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.82)'
  }
};

const SigningModal = () => {
  const isSigning = useRecoilValue(signingState);
  return (
    <ReactModal style={customStyles} isOpen={isSigning}>
      <Container>
        <Title>Please Complete Required Signings</Title>
        <ImageWrapper>
          <Image src={signingImage} alt='signing-image' />
        </ImageWrapper>
        <Message>This will go away when all reqired signings are complete</Message>
      </Container>
    </ReactModal>
  );
};

export default SigningModal;
