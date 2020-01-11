import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

const Content = styled.div`
  transform: ${props => (props.isOpen ? 'translateX(-125px)' : 'inherit')};
  transition: all 0.15s ease-in-out;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <Content isOpen={isOpen}>
        <Header setOpen={setOpen} isOpen={isOpen} />
        <Home />
        <Portfolio />
        <Resume />
        <Contact />
      </Content>
      <Sidebar setOpen={setOpen} isOpen={isOpen} />
    </Container>
  );
}

export default App;
