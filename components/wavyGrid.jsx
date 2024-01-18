import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Image,
  Container,
} from "@chakra-ui/react";

const WavyGrid = () => {
  return (
    <Box bgColor="#1D1C1C">
      <Box maxW="1280px" mx="auto">
        {/* Responsive Grid */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
          {/* Items for Small Devices (base to sm) */}
          <Box
            color="white"
            p="3rem"
            mx="auto"
            gridColumn={{ base: "span 2", md: "span 3" }}
            h="250px"
          >
            <Heading as="h2" size="md">
              Main Heading
            </Heading>
            <Text>Subtitle below heading </Text>
          </Box>

          {/* Image - Only for md and larger */}
          <Box display={{ base: "none", md: "block" }} ml="-10%">
            <Image src="/images/image1.png" alt="Image 1" h="320px" width="380px"/>
          </Box>
        </SimpleGrid>

        {/* Second Responsive Grid for Image-Information pairs */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
          {/* First Image-Information Pair */}
          <Box display={{ base: "block", md: "none" }} mr="-10%">
            <Image src="/images/image2M.png" alt="Image 3" h="250px" w="100%"/>
          </Box>
          <Box display={{ base: "none", md: "block" }} mr="-10%">
            <Image src="/images/image2.png" alt="Image 3" h="320px" width="380px"/>
          </Box>
          <Box color="white" p="3rem" mx="auto">
            <Heading as="h2" size="md">
              Information 2
            </Heading>
            <Text>Details about Image 2</Text>
          </Box>

          {/* Second Image-Information Pair */}

          <Box display={{ base: "none", md: "block" }} mr="-10%" ml="-10%">
            <Image src="/images/image3.png" alt="Image 3" h="320px" width="380px" />
          </Box>
          <Box color="white" p="3rem" mx="auto">
            <Heading as="h2" size="md">
              Information 3
            </Heading>
            <Text>Details about Image 3</Text>
          </Box>
          <Box display={{ base: "block", md: "none" }} ml="-10%">
            <Image src="/images/image3M.png" alt="Image 3" h="250px" width="100%"/>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
          {/* First Image-Information Pair */}
          <Box display={{ base: "block", md: "none" }} mr="-10%">
            <Image src="/images/image4M.png" alt="Image 3" h="250px" width="100%" />
          </Box>

          <Box color="white" p="3rem" mx="auto">
            <Heading as="h2" size="md">
              Information 4
            </Heading>
            <Text>Details about Image 4</Text>
          </Box>

          <Box display={{ base: "none", md: "block" }} mr="-10%" ml="-10%">
            <Image src="/images/image4.png" alt="Image 3"  h="320px" width="380px"/>
          </Box>

          {/* Second Image-Information Pair */}
          <Box color="white" p="3rem" mx="auto">
            <Heading as="h2" size="md">
              Information 5
            </Heading>
            <Text>Details about Image 5</Text>
          </Box>
          <Box display={{ base: "block", md: "none" }} ml="-10%">
            <Image src="/images/image5M.png" alt="Image 3" h="250px" width="100%" />
          </Box>
          <Box display={{ base: "none", md: "block" }} ml="-10%">
            <Image src="/images/image5.png" alt="Image 3" h="320px" width="380px"/>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WavyGrid;
