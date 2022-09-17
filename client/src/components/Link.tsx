import styled from 'styled-components';
import React from 'react';

const StyledLink = styled.a`
  color: ${(props) => props.theme.link};
  text-decoration: none;
  cursor: pointer;
`;

const Link = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <StyledLink target='_blank' href={to}>
      {children}
    </StyledLink>
  );
};

export default Link;
