import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { OffCanvas, OffCanvasBody } from 'react-offcanvas';

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <OffCanvas width={300} transitionDuration={300} effect={'parallax'} isMenuOpened={isOpen} position={'right'}>
      <OffCanvasBody>
        <Header setOpen={setOpen} isOpen={isOpen} />
        <Home />
        <Portfolio />
        <Resume />
        <Contact />
      </OffCanvasBody>
    </OffCanvas>
  );
}

export default App;
