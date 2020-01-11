import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  right: 0;
  transition: all 0.15s ease-in-out;
  transform: ${props => (props.isOpen ? 'translateX(0px)' : 'translateX(125px)')};
`;

const Link = styled.a`
  padding: 16px;
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
      <LinkItem id="about" href="#portfolio" setOpen={setOpen}>
        Portfolio
      </LinkItem>
      <LinkItem id="contact" href="/contact" setOpen={setOpen}>
        Contact
      </LinkItem>
    </Container>
  );
};
