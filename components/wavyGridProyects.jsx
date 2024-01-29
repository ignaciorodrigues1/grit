import {
  Box,
  SimpleGrid,
  Button,
  Text,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";

const WavyGridProyects = () => {
  return (
    <Box bgColor="#1D1C1C" overflowX="hidden">
      {/* PROYECTO 1 */}
      <Box
        maxW="1280px"
        mx="auto"
        backgroundImage={{
          base: "url('/images/heroMobile.png')",
          md: "url('/images/neanderBg.png')",
        }}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
          <Box display={{ base: "none", md: "block" }} >
            <Image
              src="/images/proyect1vector.png"
              alt="Image 3"
              minW="100%"
              h="700px"
              maxH="90vh"
            />
          </Box>

          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="column"
          ></Flex>

          <Box display={{ base: "none", md: "block" }} >
            <Image
              src="/images/vectorL-R.png"
              alt="Image 3"
              h="700px"
              maxH="90vh"
            />
          </Box>

          <Box
            display={{ base: "none", md: "block" }}
            mr="-10%"
            ml="-10%"
            maxH="700px"
          >
            <Image
              src="/images/vectorC.png"
              alt="Image 3"
              h="700px"
              maxH="90vh"
            />
          </Box>
        </SimpleGrid>
      </Box>

      {/* PROYECTO 2 */}

      <Box maxW="1280px" mx="auto">
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
          <Box display={{ base: "none", md: "block" }} >

          </Box>

          <Box display={{ base: "none", md: "block" }} >
            <Image
              src="/images/vectorC.png"
              alt="Image 3"
              h="700px"
              maxH="90vh"
            />
          </Box>

          <Box display={{ base: "none", md: "block" }} >
            <Image
              src="/images/vectorL-R.png"
              alt="Image 3"
              h="700px"
              maxH="90vh"
            />
          </Box>

          <Box display={{ base: "none", md: "block" }}>
            <Image
              src="/images/proyect2vector.png"
              alt="Image 3"
              minW="100%"
              h="700px"
              maxH="90vh"
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WavyGridProyects;
