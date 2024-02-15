import { Image, Box, Flex, SimpleGrid, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      bgColor="#1D1C1C"
      overflowX="hidden"
      backgroundImage={{
        base: "url('/images/empresa/heroMobile.png')",
        md: "url('/images/empresa/heroDesktop.png')",
      }}
      backgroundSize="cover"
      backgroundPosition="center"
      h={{ base: "75vh", md: "700px" }}
      position="relative"
      zIndex="0"
    >
      <Box maxW="1280px" mx="auto">
        <Flex
          maxW="1280px"
          mx="auto"
          bottom="0"
          flexDirection="column"
          justifyContent="left"
          alignItems="left"
          textAlign="left"
          paddingX={{ base: "2rem", md: "3rem", xl: "0" }}
          py={10}
          position="absolute"
        >
          <Heading
            color="white"
            fontSize={{ base: "35px", sm: "6vw", md: "55px", lg: "72px" }}
            lineHeight={{ base: "35px", sm: "6vw", md: "55px", lg: "67px" }}
            fontWeight="bold"
            fontFamily="Travels"
            textTransform="uppercase"
            textShadow="0px 0px 12px rgba(0, 0, 0, 0.65)"
            pb="5"
          >
            SOMOS GRIT
          </Heading>
          <Text
            color="#EBEBEB"
            fontSize="14px"
            fontFamily="Ubuntu Mono"
            maxWidth={{ md: "60%" }}
          >
            El profundo compromiso se ve reflejado en cada una de nuestras
            obras, las cuales se distinguen por su calidad, cuidado del medio
            ambiente e integración con la comunidad.
          </Text>
        </Flex>

        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacing={0}
          zIndex="5"
          position="absolute"
          inset={0}
          maxW="1280px"
          mx="auto"
        >
          <Box />

          <Box
            display={{ base: "none", md: "block" }}
            left="0"
            ml={{ md: "-34px" }}
          >
            <Image src="/images/vectorL-R.png" alt="Image 2" h="700px" />
          </Box>

          <Box
            display={{ base: "none", md: "block" }}
            left="0"
            ml={{ md: "-34px" }}
          >
            <Image src="/images/vectorC.png" alt="Image 3" h="700px" />
          </Box>

          <Box
            display={{ base: "none", md: "block" }}
            left="0"
            ml={{ md: "-34px" }}
          >
            <Image src="/images/vectorL-R.png" alt="Image 4" h="700px" />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Hero;
