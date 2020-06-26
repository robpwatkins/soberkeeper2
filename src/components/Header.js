import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  height: 50px;
  width: 100%;
  background: hotpink;
`;

const Header = () => {
  return (
    <HeaderDiv className="header">Header, here.</HeaderDiv>
  )
}

export default Header;