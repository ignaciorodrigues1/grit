import { Flex, Image, Text, Box, Link } from "@chakra-ui/react";
import { AnimatedIcon } from "./animations/animatedIcon";

const AppDownload = () => {
  return (
    <Box
      py={8}
      backgroundImage={`url("/images/appBgDesktop.png")`}
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      overflowX="hidden"
      zIndex={1}
    >
      <Flex
        maxW="1280px"
        mx="auto"
        paddingX={{ base: "1rem", md: "3rem", xl: "0" }}
      >
        <Flex flex="1" flexDirection="column" pr={6} color="#ffffff" mt="25%">
          <Text
            mb={2}
            textTransform="uppercase"
            fontFamily="Travels"
            fontWeight="900"
            fontSize={{ base: "32px", md: "72px" }}
            lineHeight={{ base: "31px", md: "62px" }}
          >
            Invertí en tu futuro
          </Text>

          <Text
            fontSize="14px"
            lineHeight="14px"
            mb={4}
            fontFamily="Ubuntu Mono"
            display={{ base: "none", md: "block" }}
          >
            El profundo compromiso se ve reflejado en cada una de nuestras
            obras, las cuales se distinguen por su calidad, cuidado del medio
            ambiente e integración con la comunidad.
          </Text>

          <Text
            fontSize="14px"
            lineHeight="14px"
            mb={4}
            fontFamily="Ubuntu Mono"
            display={{ base: "block", md: "none" }}
          >
            El profundo compromiso se ve reflejado en cada una de nuestras
            obras.
          </Text>

          {/* App Store and Play Store Links */}
          <Flex align="center">
            <Link href="#" mr={4} height={{ base: "34px", md: "auto" }}>
              <Image src="/images/playStore.png" alt="Play Store" />
            </Link>
            <Link href="#" height={{ base: "34px", md: "auto" }}>
              <Image src="/images/appStore.png" alt="App Store" />
            </Link>
          </Flex>
        </Flex>

        <Box
          maxH={{ base: "310px", md: "620px" }}
          zIndex={{ base: "-1", md: "null" }}
          ml={{ base: "-9", md: "null" }}
        >
          <AnimatedIcon>
            <Image src="/images/appImage.png" alt="Right Side Image" />
          </AnimatedIcon>
        </Box>
      </Flex>
    </Box>
  );
};

export default AppDownload;
