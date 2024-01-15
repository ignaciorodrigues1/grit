import { Box, Grid } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Grid
      className="curlyGrid"
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gap={0}
      backgroundImage="url('/images/heroDesktop.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      minH="80vh"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <Box className="curlyGridBox" position="relative" key={1}/>
      ))}
      {Array.from({ length: 4 }).map((_, index) => (
        <Box className="curlyGridBox" position="relative" key={2}/>
      ))}
    </Grid>
  );
};

export default Hero;
