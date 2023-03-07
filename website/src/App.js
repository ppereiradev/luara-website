import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

import Home from './sections/Home'
import AboutMe from './sections/AboutMe';
import Work from './sections/Work';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <ChakraProvider>
      <Home />
      <AboutMe />
      <Work />
      <Education />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
