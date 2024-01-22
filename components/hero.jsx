import { Image, Heading, Flex } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      backgroundImage="url('/images/heroDesktop.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      minH="80vh"
      overflowX="hidden"
    >
      <Flex
        maxW="1280px"
        mx="auto"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        position="relative"
        paddingX={{ base: "2rem", md: "3rem", xl: "0" }}
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
    </Flex>
  );
};

export default Hero;
