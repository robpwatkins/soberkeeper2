import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  height: 50px;
  width: 100%;
  color: white;
  background: #87dfd6;
`;

const Header = () => {
  return (
    <HeaderDiv className="header">Sober Keeper</HeaderDiv>
  )
}

export default Header;