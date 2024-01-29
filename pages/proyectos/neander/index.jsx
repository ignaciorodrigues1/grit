import { Box, Image, Text, Flex } from "@chakra-ui/react";
import PanoramicImage from "../components/panoramicImage";
import { AnimatedIcon } from "../../../components/animations/animatedIcon";

const NeanderPage = () => {
  return (
    <Box h="100vh" bgColor="#4038C5" position="relative" zIndex={1}>
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear-gradient(180deg, #4038C5 54.06%, rgba(64, 56, 197, 0) 108.64%)"
        zIndex={3}
      />

      <Box
        position="absolute"
        inset="0"
        backgroundImage="url('/images/bgPattern.png')"
        zIndex={2}
      />

      {/* Panoramic Image */}
      <PanoramicImage />

      {/* Centered Content */}
      <Flex
        maxW="1280px"
        position="absolute"
        textAlign="center"
        zIndex={4}
        color="white"
        flexDirection="column"
        mx="auto"
        top="20%"
        left="0"
        right="0"
      >
        {/* Heading Image */}
        <Image
          src="/images/neanderTittle.png"
          alt="Neander Title"
          maxH="130px"
          mx="auto"
          my={4}
          px={5}
        />

        {/* Subtitle */}
        <Text
          fontSize="32px"
          fontWeight="bold"
          my={10}
          fontFamily="Travels"
          textTransform="uppercase"
        >
          <span style={{ color: "#A29CE2" }}>Volvé a tu</span> escencia
        </Text>

        {/* Arrow Icon */}
        <Flex justify="center" my={10}>
          <AnimatedIcon>
            <Image
              src="/images/arrowDown.png"
              alt="Arrow Icon"
              maxH="50px"
              w="auto"
            />
          </AnimatedIcon>
        </Flex>

        {/* Additional Image */}
        <Image
          src="/images/neanderPreview.png"
          alt="Additional Image"
          maxH="700px"
          maxW="90%"
          mx="auto"
        />
      </Flex>
    </Box>
  );
};

export default NeanderPage;
