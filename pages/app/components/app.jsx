import { Box, Image, Center } from "@chakra-ui/react";

const App = () => {
  return (
    <Box bgColor="#1D1C1C">
      <Box maxW="1280px" mx="auto" position="relative">
        <Box
          position="absolute"
          inset="0"
          backgroundImage="url('/images/app/bg.png')"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        />
        <Center pb="20" pt="10">
          <Image
            src="/images/app/Home.png"
            alt="Home"
            _hover={{
              transform: "scale(1.1) translateX(-10%)",
            }}
            transition="transform 0.3s ease"
            h="auto"
            maxW="calc(33.33% - 20px)"
            mr="-6%"
            mb="-10%"
            zIndex="999"
          />
          <Image
            src="/images/app/Login.png"
            alt="Login"
            _hover={{
              transform: "scale(1.1) translateY(-10%)",
            }}
            transition="transform 0.3s ease"
            h="auto"
            maxW="calc(33.33% - 20px)"
            zIndex="999"
          />
          <Image
            src="/images/app/Carrito.png"
            alt="Carrito"
            _hover={{
              transform: "scale(1.1) translateX(10%)",
            }}
            transition="transform 0.3s ease"
            h="auto"
            maxW="calc(33.33% - 20px)"
            ml="-7%"
            zIndex="999"
          />
        </Center>
      </Box>
    </Box>
  );
};

export default App;
