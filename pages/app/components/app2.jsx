import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";

const App2 = () => {
  return (
    <Box
      backgroundImage="url('/images/app/bg2.png')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box maxW="1280px" mx="auto" textAlign="center" pt="20">
        <Center>
          <Flex direction="column">
            {/* Título */}
            <Box textAlign="center" p="2">
              <Heading
                color="white"
                fontSize={{ base: "20px", sm: "6vw", md: "55px", lg: "72px" }}
                fontWeight="bold"
                fontFamily="Travels"
                textTransform="uppercase"
                lineHeight={{ base: "25px", sm: "6vw", md: "55px", lg: "67px" }}
                textShadow="0px 0px 12px rgba(0, 0, 0, 0.65)"
              >
                Construí tu futuro
              </Heading>
            </Box>

            {/* Imágenes de Play Store y App Store */}
            <Flex mt="10" mx="auto">
              <Image src="/images/playStore.png" alt="Play Store" mx="2" />
              <Image src="/images/appStore.png" alt="App Store" mx="2" />
            </Flex>

            {/* Imagen del teléfono */}
            <Box mx="auto">
              <Image src="/images/app/phone.png" alt="Teléfono" />
            </Box>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
};

export default App2;
