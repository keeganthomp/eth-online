import styled from 'styled-components';
import React from 'react';

const StyledBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme.main};
  color: white;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({ children, onClick, disabled, loading }: Props) => {
  return (
    <StyledBtn onClick={onClick} disabled={disabled || loading}>
      {loading ? <span>Please wait...</span> : children}
    </StyledBtn>
  );
};

export default Button;
