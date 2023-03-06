import { Flex, Center, Square, Text, Box } from '@chakra-ui/react';
import '../assets/css/home.scss';

export default function Home() {
  return (
    <Box id='home-container'>
      <Flex>
        <Center size='100px' bg='tomato'>
          <Text>Box 1</Text>
        </Center>
        <Square bg='blue.500' size='150px'>
          <Text>Box 2</Text>
        </Square>
        <Box flex='1' bg='tomato'>
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </Box>
  );
}
