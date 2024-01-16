import { Box } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      className="curlyGrid"
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gap={0}
      backgroundImage="url('/images/heroDesktop.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      minH="80vh"
    >

    </Box>
  );
};

export default Hero;
