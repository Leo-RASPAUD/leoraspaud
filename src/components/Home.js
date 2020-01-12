import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';
import { MdFileDownload } from 'react-icons/md';
import Social from './Social';

const bounce = keyframes`
  0% {
    bottom: 25%;
  }

  50% {
    bottom: 27%;
  }

  100% {
    bottom: 25%;
  }
`;

const Container = styled.div`
  padding: 0 16px;
  min-height: 100vh;
  position: relative;
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
    <Container>
      <h1>Léo Raspaud</h1>
      <Social />
      <p>French senior software engineer currently based in Sydney.</p>
      <Button onClick={downloadResume} style={{ marginTop: 16 }} Icon={MdFileDownload}>
        Resume
      </Button>

      <Scroll
        style={{ display: scroll < 200 ? 'block' : 'none' }}
        onClick={() => {
          document.getElementById('portfolio').scrollIntoView({
            behavior: 'smooth',
          });
        }}
      />
    </Container>
  );
};
