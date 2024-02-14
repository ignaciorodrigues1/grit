import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Center,
  AspectRatio,
} from "@chakra-ui/react";

const Info = () => {
  return (
    <Box  bgColor="#4038C5">
      <Box maxW="1280px" mx="auto" w={{md: "95%"}}>
        <SimpleGrid
          columns={{ base: "1", md: "3" }}
          spacing={{ base: "0", md: "1" }}
          gap={{ base: "0", md: "2" }}
        >
          <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
            <Flex
              direction={{ base: "row", md: "column" }}
              mt={{ base: "0", md: "-60%" }}
            >
              <Box
                w="100%"
                h="100%"
                backgroundImage="url('/images/neander/image1.png')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
              />
              <Center
                w="100%"
                h="100%"
                minH={{ base: "", md: "250.67px" }}
                bgColor="#4A42C8"
              >
                <Flex color="white" alignItems="center" flexDirection="column">
                  <Image src="/images/present.png" alt="Icono 1" />

                  <Text
                    mt="2"
                    fontSize="lg"
                    fontFamily="Travels"
                    fontWeight="700"
                  >
                    SERVICIO
                  </Text>

                  <Text fontSize="sm" fontFamily="Ubuntu Mono">
                    Descripción
                  </Text>
                </Flex>
              </Center>
            </Flex>
          </AspectRatio>
          <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
            <Flex
              direction={{ base: "row-reverse", md: "column" }}
              mt={{ base: "", md: "-40%" }}
            >
              <Box
                w="100%"
                h="100%"
                backgroundImage="url('/images/neander/image2.png')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
              />
              <Center
                w="100%"
                h="100%"
                minH={{ base: "", md: "250.67px" }}
                bgColor="#4A42C8"
              >
                <Flex color="white" alignItems="center" flexDirection="column">
                  <Image src="/images/present.png" alt="Icono 1" />

                  <Text
                    mt="2"
                    fontSize="lg"
                    fontFamily="Travels"
                    fontWeight="700"
                    textTransform="uppercase"
                  >
                    SERVICIO
                  </Text>

                  <Text fontSize="sm" fontFamily="Ubuntu Mono">
                    Descripción.
                  </Text>
                </Flex>
              </Center>
            </Flex>
          </AspectRatio>
          <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
            <Flex
              direction={{ base: "row", md: "column" }}
              mt={{ base: "", md: "-20%" }}
            >
              <Box
                w="100%"
                h="100%"
                backgroundImage="url('/images/neander/image3.png')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
              />
              <Center
                w="100%"
                h="100%"
                minH={{ base: "", md: "250.67px" }}
                bgColor="#4A42C8"
              >
                <Flex color="white" alignItems="center" flexDirection="column">
                  <Image src="/images/present.png" alt="Icono 1" />

                  <Text
                    mt="2"
                    fontSize="lg"
                    fontFamily="Travels"
                    fontWeight="700"
                    textTransform="uppercase"
                  >
                    SERVICIO
                  </Text>

                  <Text fontSize="sm" fontFamily="Ubuntu Mono">
                    Descripción
                  </Text>
                </Flex>
              </Center>
            </Flex>
          </AspectRatio>
          <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
            <Flex
              direction={{ base: "row-reverse", md: "column" }}
              mt={{ base: "", md: "-60%" }}
            >
              <Box
                w="100%"
                h="100%"
                backgroundImage="url('/images/neander/image4.png')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
              />
              <Center
                w="100%"
                h="100%"
                minH={{ base: "", md: "250.67px" }}
                bgColor="#4A42C8"
              >
                <Flex color="white" alignItems="center" flexDirection="column">
                  <Image src="/images/present.png" alt="Icono 1" />

                  <Text
                    mt="2"
                    fontSize="lg"
                    fontFamily="Travels"
                    fontWeight="700"
                    textTransform="uppercase"
                  >
                    SERVICIO
                  </Text>

                  <Text fontSize="sm" fontFamily="Ubuntu Mono">
                    Descripción
                  </Text>
                </Flex>
              </Center>
            </Flex>
          </AspectRatio>
          <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
            <Flex
              direction={{ base: "row", md: "column" }}
              mt={{ base: "", md: "-40%" }}
            >
              <Box
                w="100%"
                h="100%"
                backgroundImage="url('/images/neander/image5.png')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
              />
              <Center
                w="100%"
                h="100%"
                minH={{ base: "", md: "250.67px" }}
                bgColor="#4A42C8"
              >
                <Flex color="white" alignItems="center" flexDirection="column">
                  <Image src="/images/present.png" alt="Icono 1" />

                  <Text
                    mt="2"
                    fontSize="lg"
                    fontFamily="Travels"
                    fontWeight="700"
                    textTransform="uppercase"
                  >
                    SERVICIO
                  </Text>

                  <Text fontSize="sm" fontFamily="Ubuntu Mono">
                    Descripción
                  </Text>
                </Flex>
              </Center>
            </Flex>
          </AspectRatio>
          <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
            <Flex
              direction={{ base: "row-reverse", md: "column" }}
              mt={{ base: "", md: "-20%" }}
            >
              <Box
                w="100%"
                h="100%"
                backgroundImage="url('/images/neander/image6.png')"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
              />
              <Center
                w="100%"
                h="100%"
                minH={{ base: "", md: "250.67px" }}
                bgColor="#4A42C8"
              >
                <Flex color="white" alignItems="center" flexDirection="column">
                  <Image src="/images/present.png" alt="Icono 1" />

                  <Text
                    mt="2"
                    fontSize="lg"
                    fontFamily="Travels"
                    fontWeight="700"
                    textTransform="uppercase"
                  >
                    SERVICIO
                  </Text>

                  <Text fontSize="sm" fontFamily="Ubuntu Mono">
                    Descripción
                  </Text>
                </Flex>
              </Center>
            </Flex>
          </AspectRatio>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Info;
