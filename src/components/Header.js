import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #12343b;
  display: flex;
  justify-content: space-around;
  padding: 16px;
`;

const Link = styled.a`
  font-size: 18px;
  color: #e1b382;
`;

export default () => {
  return (
    <Header>
      <Link href="#home">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#resume">Resume</Link>
      <Link href="#contact">Contact</Link>
    </Header>
  );
};
