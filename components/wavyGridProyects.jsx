import {
  Box,
  SimpleGrid,
  Button,
  Text,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";

const WavyGridProyects = () => {

  return (
    <Box bgColor="#1D1C1C" overflowX="hidden">
      <Box maxW="1280px" mx="auto">
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
          
        </SimpleGrid>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
    
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WavyGridProyects;
