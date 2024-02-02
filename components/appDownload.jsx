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
            fontSize={{ base: "18px", sm: "32px", md: "47px", lg: "72px" }}
            lineHeight={{ base: "31px", md: "62px" }}
            width="75%"
          >
            Invertí en tu futuro
          </Text>

          <Text
            fontSize="14px"
            lineHeight="14px"
            my={4}
            fontFamily="Ubuntu Mono"
            display={{ base: "none", md: "block" }}
            width="75%"
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
            width="75%"
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

        <Flex zIndex="-1" ml={{ base: "-9", md: "null" }} align="center">
          <AnimatedIcon>
            <Image
              src="/images/appImage.png"
              alt="App Image"
              w="100%"
              maxH={{ base: "310px", md: "620px" }}
            />
          </AnimatedIcon>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AppDownload;
