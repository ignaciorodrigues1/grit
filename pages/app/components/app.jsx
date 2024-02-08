import { Box, Image, Flex, Center } from "@chakra-ui/react";

const App = () => {
  return (
    <Box bgColor="#1D1C1C">
      <Box
        maxW="1280px"
        mx="auto"
        backgroundImage="url('/images/app/bg.png')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Center pb="20" pt="10">
          <Image
            src="/images/app/Home.png"
            alt="Home"
            h="auto"
            maxW="calc(33.33% - 20px)"
            mr="-6%"
            mb="-10%"
          />
          <Image
            src="/images/app/Login.png"
            alt="Login"
            h="auto"
            maxW="calc(33.33% - 20px)"
          />
          <Image
            src="/images/app/Carrito.png"
            alt="Carrito"
            h="auto"
            maxW="calc(33.33% - 20px)"
            ml="-7%"
          />
        </Center>
      </Box>
    </Box>
  );
};

export default App;
