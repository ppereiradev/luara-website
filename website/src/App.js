import { ChakraProvider } from '@chakra-ui/react'

import Home from './sections/home/Home'

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
