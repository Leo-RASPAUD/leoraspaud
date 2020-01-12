import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Sidebar from './components/Sidebar';

const Content = styled.div`
  transform: ${props => (props.isOpen ? 'translateX(-200px)' : 'inherit')};
  background-color: ${props => (props.isOpen ? '#607d8b' : 'inherit')};
  opacity: ${props => (props.isOpen ? '0.5' : 'inherit')};
  filter: ${props => (props.isOpen ? 'blur(2px)' : 'inherit')};
  transition: transform 0.15s ease-in-out;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container id="home">
      <Content isOpen={isOpen}>
        <Header setOpen={setOpen} isOpen={isOpen} />
        <Home />
        <Portfolio />
      </Content>
      <Sidebar setOpen={setOpen} isOpen={isOpen} />
    </Container>
  );
}

export default App;
