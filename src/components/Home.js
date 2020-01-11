import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';
import { MdFileDownload } from 'react-icons/md';

const bounce = keyframes`
  0% {
    bottom: 64px;
  }

  50% {
    bottom: 48px;
  }

  100% {
    bottom: 64px;
  }
`;

const Container = styled.div`
  padding: 0 16px;
  min-height: 100vh;
`;

const Scroll = styled.button`
  outline: none;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-right: 4px solid black;
  border-bottom: 4px solid black;
  transform: rotate(45deg);
  position: absolute;
  bottom: 48px;
  left: calc(50% - 32px);
  animation: ${bounce} 1.25s ease-in-out infinite;
`;

export default () => {
  const [scroll, setScroll] = useState(150);

  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };

  const downloadResume = () => {
    window.open('https://files-leoraspaud.s3.amazonaws.com/Resume.pdf');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // eslint-disable-line

  return (
    <Container id="home">
      <h1>Léo Raspaud</h1>
      <p>French senior software engineer currently based in Sydney.</p>
      <Button onClick={downloadResume} style={{ marginTop: 16 }}>
        <MdFileDownload />
        <span style={{ marginLeft: 16 }}>Resume</span>
      </Button>
      <Scroll
        style={{ display: scroll < 200 ? 'block' : 'none' }}
        onClick={() => {
          document.getElementById('about').scrollIntoView({
            behavior: 'smooth',
          });
        }}
      />
    </Container>
  );
};
