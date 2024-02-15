import { Image, Box, Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import ImageAnimation from "./animations/linesFromTop";

const Hero = () => {
  return (
    <Box
      bgColor="#1D1C1C"
      overflowX="hidden"
      position="relative"
      h={{ base: "75vh", md: "700px" }}
      zIndex="0"
    >
      {/* Imagen de fondo */}
      <Box
        as="img"
        src="/images/heroMobile.png"
        alt="Background Image"
        display={{ base: "block", md: "none" }}
        w="100%"
        h="100%"
        objectFit="cover"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
      />

      {/* Video de fondo */}
      <Box
        as="video"
        src="/images/heroVideo.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
        w="100%"
        h="100%"
        objectFit="cover"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
        playbackRate={0.5}
      />

      <Flex
        maxW="1280px"
        mx="auto"
        bottom="0"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        paddingX={{ base: "2rem", md: "3rem", xl: "0" }}
        py={10}
        position="absolute"
      >
        <Image
          src="/images/brand.png"
          alt="Brand Logo"
          boxSize={{ base: "120px", md: "180px" }}
          mt="15%"
          mb={10}
        />

        <Heading
          color="white"
          fontSize={{ base: "20px", sm: "6vw", md: "55px", lg: "72px" }}
          fontWeight="bold"
          fontFamily="Travels"
          textTransform="uppercase"
          lineHeight={{ base: "25px", sm: "6vw", md: "55px", lg: "67px" }}
          textShadow="0px 0px 12px rgba(0, 0, 0, 0.65)"
        >
          Desarrollamos comunidades sustentables
        </Heading>
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

          <ImageAnimation delay={1}>
            <Box display={{ base: "none", md: "block" }}>
              <Image src="/images/vectorL-R.png" alt="Image 2" h="700px" />
            </Box>
          </ImageAnimation>

          <ImageAnimation delay={1.3}>
            <Box
              display={{ base: "none", md: "block" }}
              left="0"
              ml={{ md: "-34px" }}
            >
              <Image src="/images/vectorC.png" alt="Image 3" h="700px" />
            </Box>
          </ImageAnimation>

          <ImageAnimation delay={1.6}>
            <Box
              display={{ base: "none", md: "block" }}
              left="0"
              ml={{ md: "-34px" }}
            >
              <Image src="/images/vectorL-R.png" alt="Image 4" h="700px" />
            </Box>
          </ImageAnimation>
        </SimpleGrid>
      </Box>
  );
};

export default Hero;
