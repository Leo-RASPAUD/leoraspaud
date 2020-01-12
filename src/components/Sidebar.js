import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { MdClose } from 'react-icons/md';

const Container = styled.div`
  position: absolute;
  width: 168px;
  padding: 16px;
  top: 0px;
  display: flex;
  flex-direction: column;
  right: 0;
  transition: all 0.15s ease-in-out;
  transform: ${props => (props.isOpen ? 'translateX(0px)' : 'translateX(200px)')};
`;

const Link = styled.a`
  padding: 16px;
  text-decoration: none;
  color: currentColor;
`;

const LinkItem = ({ children, href, id, setOpen }) => {
  return (
    <Link
      href={href}
      id={id}
      onClick={() => {
        setOpen(false);
      }}
    >
      {children}
    </Link>
  );
};

export default ({ isOpen, setOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Button
        style={{ border: 'none' }}
        onClick={() => {
          setOpen(false);
        }}
      >
        <MdClose />
      </Button>
      <LinkItem id="home" href="#home" setOpen={setOpen}>
        Home
      </LinkItem>
      <LinkItem id="about" href="#portfolio" setOpen={setOpen}>
        Portfolio
      </LinkItem>
    </Container>
  );
};
