import { Flex } from '@chakra-ui/react';
import Calculator from './components/features/Calculator';

function App() {
  return (
    <Flex
      w="100%"
      h="100vh"
      maxWidth="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Calculator />
    </Flex>
  );
}

export default App;
