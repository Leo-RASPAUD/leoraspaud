import React from 'react';
import styled from 'styled-components';
import profile from '../images/profile.jpg';
import { HamburgerSlider } from 'react-animated-burgers';

const Header = styled.header`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.a`
  font-size: 24px;
  margin: 0 8px;
  text-decoration: none;
`;

const Profile = styled.img`
  clip-path: circle(50% at 50% 50%);
  margin-right: 16px;
  max-height: 64px;
`;

const Desktop = styled.div`
  @media (max-width: 420px) {
    display: none;
  }
`;

const Mobile = styled.div`
  @media (min-width: 420px) {
    display: none;
  }
`;

export default ({ setOpen, isOpen }) => {
  return (
    <Header>
      <Profile src={profile} alt="profile_pic" />
      <Mobile>
        <HamburgerSlider
          buttonWidth={32}
          isActive={isOpen}
          toggleButton={() => {
            setOpen(!isOpen);
          }}
        />
      </Mobile>
      <Desktop>
        <Link href="#about">About</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#resume">Resume</Link>
      </Desktop>
    </Header>
  );
};
