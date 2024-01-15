import { Flex, Image, Text, Box } from "@chakra-ui/react";

const AppDownload = () => {
  return (
    <Box
      py={8}
      backgroundImage={`url("/images/appBgDesktop.png")`}
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
    >
      <Flex maxW="1200px" mx="auto">
        {/* Left Side */}
        <Flex flex="1" flexDirection="column" p={8} color="#ffffff" mt="25%">
          {/* Heading */}
          <Text mb={2} textTransform="uppercase" fontFamily="Travels" fontWeight="900" fontSize="72px" lineHeight="62px">
            Invertí en tu futuro
          </Text>

          {/* Subtitle */}
          <Text fontSize="14px" lineHeight="14px" mb={4} fontFamily="Ubuntu Mono">
            El profundo compromiso se ve reflejado en cada una de nuestras
            obras, las cuales se distinguen por su calidad, cuidado del medio
            ambiente e integración con la comunidad.
          </Text>

          {/* App Store and Play Store Links */}
          <Flex align="center">
            <Image src="/images/playStore.png" alt="Play Store" mr={4} />
            <Image src="/images/appStore.png" alt="App Store" />
          </Flex>
        </Flex>

        {/* Right Side */}
        <Image
          src="/images/appImage.png"
          alt="Right Side Image"
        />
      </Flex>
    </Box>
  );
};

export default AppDownload;
