import React from 'react';
import styled from 'styled-components';
import { OffCanvas, OffCanvasMenu } from 'react-offcanvas';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.button`
  background: none;
  border: none;
  outline: none;
  text-align: left;
  margin: 16px;
  font-size: 24px;
  text-decoration: underline;
`;

const LinkItem = ({ children, href, id, setOpen }) => {
  return (
    <Link
      href={href}
      id={id}
      onClick={() => {
        setOpen(false);
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
        });
      }}
    >
      {children}
    </Link>
  );
};

export default ({ isOpen, setOpen }) => {
  return (
    <OffCanvas width={300} transitionDuration={300} effect={'parallax'} isMenuOpened={isOpen} position={'right'}>
      <OffCanvasMenu>
        <Container>
          <LinkItem id="home" setOpen={setOpen}>
            Home
          </LinkItem>
          <LinkItem id="portfolio" setOpen={setOpen}>
            Portfolio
          </LinkItem>
          <LinkItem id="contact" setOpen={setOpen}>
            Contact
          </LinkItem>
        </Container>
      </OffCanvasMenu>
    </OffCanvas>
  );
};
