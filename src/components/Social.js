import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const Container = styled.div`
  align-items: center;
  margin-top: 16px;
`;

export default () => {
  return (
    <Container>
      <Button
        noBorder
        noPaddingLeft
        onClick={() => {
          window.open('https://github.com/Leo-RASPAUD');
        }}
        Icon={GoMarkGithub}
        iconSize="32px"
      >
        Github
      </Button>
      <Button
        noBorder
        noPaddingLeft
        Icon={FaLinkedin}
        iconSize="32px"
        iconColor="#0077b5"
        onClick={() => {
          window.open('https://www.linkedin.com/in/leo-raspaud/');
        }}
      >
        Linkedin
      </Button>
      <Button
        noBorder
        noPaddingLeft
        Icon={FaYoutube}
        iconSize="32px"
        iconColor="red"
        onClick={() => {
          window.open('https://www.youtube.com/channel/UC-BgJSCQ-7ZND43Qo_t8-LA?view_as=subscriber');
        }}
      >
        CSS-tricks
      </Button>
      <Button
        noBorder
        noPaddingLeft
        Icon={FaYoutube}
        iconSize="32px"
        iconColor="red"
        onClick={() => {
          window.open('https://www.youtube.com/channel/UCgVmj-dtqY7Lq9enJ076C2w?view_as=subscriber');
        }}
      >
        Léo Raspaud
      </Button>
    </Container>
  );
};
