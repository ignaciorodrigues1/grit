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
        alignItems="center"
      >
        <Flex flex="1" flexDirection="column" pr={6} color="#ffffff" mt="25%" w="100%">
          <Text
            mb={2}
            textTransform="uppercase"
            fontFamily="Archivo"
            fontWeight="600"
            fontSize={{ base: "18px", sm: "32px", md: "47px", lg: "72px" }}
            lineHeight={{ base: "31px", md: "62px" }}
            maxWidth="75%"
            flexShrink="0"
          >
            Simple, seguro, innovador!
          </Text>

          <Text
            fontSize="base"
            my={4}
            fontFamily="Archivo"
            fontWeight="400"
            display={{ base: "none", md: "block" }}
            maxWidth="75%"
            flexShrink="0"
          >
            Invertí en metros cuadrados online y conectá con la comunidad Grit!
          </Text>

          <Text
            fontSize="14px"
            lineHeight="14px"
            mb={4}
            fontFamily="Archivo"
            fontWeight="400"
            display={{ base: "block", md: "none" }}
            maxWidth="75%"
            flexShrink="0"
          >
            Invertí en metros cuadrados online y conectá con la comunidad Grit!
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
              w="auto"
              maxH={{ base: "310px", md: "620px" }}
              flexShrink="0"
            />
          </AnimatedIcon>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AppDownload;
