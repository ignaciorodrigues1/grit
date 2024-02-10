import {
  Box,
  SimpleGrid,
  Button,
  Text,
  Image,
  Flex,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

const WavyGrid = () => {
  const isGradientEnabled = useBreakpointValue({ base: false, xl: true });

  return (
    <Box bgColor="#1D1C1C" overflowX="hidden">
      <Box maxW="1280px" mx="auto" position="relative">
        {/* Responsive Grid */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
          <Box
            color="white"
            p={{ base: "3rem", md: "1.2rem", lg: "3rem" }}
            mx="auto"
            gridColumn={{ base: "span 2", md: "span 3" }}
            maxH="320px"
            className="HOLA"
            my="auto"
          >
            <Flex flexDirection="column">
              <Text
                color="#EBEBEB"
                fontFamily="Travels"
                fontWeight="700"
                pb={2}
                fontSize={{ base: "20px", sm: "5vw", md: "38px" }}
                lineHeight={{ base: "26px", sm: "5vw", md: "38px" }}
              >
                UN CAMINO DE{" "}
                <Box as="span" color="#9EAC8E" fontWeight="900">
                  TRANSFORMACIÓN
                </Box>
              </Text>
              <Text
                color="#EBEBEB"
                fontSize="14px"
                fontFamily="Ubuntu Mono"
                maxWidth={{ base: "100%", md: "90%", lg: "75%", xl: "60%" }}
              >
                El profundo compromiso se ve reflejado en cada una de nuestras
                obras, las cuales se distinguen por su calidad, cuidado del
                medio ambiente e integración con la comunidad.
              </Text>
            </Flex>
          </Box>

          <Box display={{ base: "none", md: "block" }} ml="-10%">
            <Image
              src="/images/image1.png"
              alt="Image 1"
              maxH="320px"
              width="100%"
            />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
          <Box display={{ base: "block", md: "none" }} mr="-10%">
            <Image
              src="/images/image2M.png"
              alt="Image 3"
              maxH="250px"
              w="100%"
            />
          </Box>
          <Box
            display={{ base: "none", md: "block" }}
            mr="-10%"
            backgroundImage="url('/images/image2s.png')"
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Image
              src="/images/frameL.png"
              alt="Image 3"
              maxH="320px"
              width="100%"
            />
          </Box>

          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="/images/icono1.png" alt="Icono 1" />

            <Text mt="2" fontSize="lg" fontFamily="Travels" fontWeight="700">
              +30K
            </Text>

            <Text fontSize="sm" fontFamily="Ubuntu Mono">
              árboles
            </Text>
          </Flex>

          {/* Second Image-Information Pair */}

          <Box display={{ base: "none", md: "block" }} mr="-10%" ml="-10%">
            <Image
              src="/images/image3.png"
              alt="Image 3"
              maxH="320px"
              width="100%"
            />
          </Box>

          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="/images/icono2.png" alt="Icono 2" />

            <Text mt="2" fontSize="lg" fontFamily="Travels" fontWeight="700">
              +400K
            </Text>

            <Text fontSize="sm" fontFamily="Ubuntu Mono">
              ecoladrillos
            </Text>
            <Text fontSize="sm" fontFamily="Ubuntu Mono">
              utilizados
            </Text>
          </Flex>

          <Box display={{ base: "block", md: "none" }} ml="-10%">
            <Image
              src="/images/image3M.png"
              alt="Image 3"
              maxH="250px"
              width="100%"
            />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
        <Box
            display={{ base: "block", md: "none" }}
            mr="-10%"
            backgroundImage="url('/images/image2s.png')"
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Image
              src="/images/frameL.png"
              alt="Image 3"
              maxH="320px"
              width="100%"
            />
          </Box>

          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="/images/icono3.png" alt="Icono 3" />

            <Text mt="2" fontSize="lg" fontFamily="Travels" fontWeight="700">
              +500M
            </Text>

            <Text fontSize="sm" fontFamily="Ubuntu Mono">
              hectáreas
            </Text>
            <Text fontSize="sm" fontFamily="Ubuntu Mono">
              intervenidas
            </Text>
          </Flex>

          <Box display={{ base: "none", md: "block" }} mr="-10%" ml="-10%">
            <Image
              src="/images/image4.png"
              alt="Image 3"
              maxH="320px"
              width="100%"
            />
          </Box>

          {/* Second Image-Information Pair */}
          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="/images/icono4.png" alt="Icono 4" />

            <Text mt="2" fontSize="lg" fontFamily="Travels" fontWeight="700">
              +100
            </Text>

            <Text fontSize="sm" fontFamily="Ubuntu Mono">
              familias
            </Text>
            <Text fontSize="sm" fontFamily="Ubuntu Mono">
              contentas
            </Text>
          </Flex>
          <Box display={{ base: "block", md: "none" }} ml="-10%">
            <Image
              src="/images/image5M.png"
              alt="Image 5"
              maxH="250px"
              width="100%"
            />
          </Box>
          <Box display={{ base: "none", md: "block" }} ml="-10%">
            <Image
              src="/images/image5.png"
              alt="Image 5"
              maxH="320px"
              width="100%"
            />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
          {/* First Row/Column */}
          <Box position="relative" mr={{ base: "", md: "-5.5%" }}>
            <Image
              src="/images/image6.png"
              alt="Image 6"
              display={{ base: "none", md: "block" }}
              width="100%"
              maxW="100vw"
            />
            <Image
              src="/images/image6M.png"
              alt="Image 6"
              display={{ base: "block", md: "none" }}
              w="100%"
            />
            <Flex
              p="20"
              position="absolute"
              bottom="0"
              left="0"
              flexDirection="column"
            >
              <Text
                color="white"
                fontFamily="Travels"
                fontWeight="400"
                fontSize={{ base: "25px", md: "32px" }}
              >
                01
              </Text>
              <Text
                color="white"
                fontFamily="Travels"
                fontWeight="900"
                textTransform="uppercase"
                fontSize={{ base: "25px", md: "32px" }}
              >
                Neander
              </Text>
              <Box my="3">
                <hr />
              </Box>
              <Text
                color="#EBEBEB"
                fontFamily="Ubuntu Mono"
                fontWeight="400"
                fontSize="14px"
              >
                Volvé a tu escencia
              </Text>
              <Link href="/proyectos/neander">
                <Button
                  mt="5"
                  type="link"
                  textAlign="center"
                  color="white"
                  textTransform="uppercase"
                  fontFamily="Travels"
                  bgColor="#EC6E44"
                  h="36px"
                  _hover={{ bgColor: "#9EAC8E" }}
                >
                  Ver Proyecto
                </Button>
              </Link>
            </Flex>
          </Box>

          {/* Second Row/Column */}
          <Box
            position="relative"
            ml={{ base: "", md: "-5.5%" }}
            _hover={{
              "& .image7": {
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Image
              src="/images/image7.png"
              alt="Image 7"
              display={{ base: "none", md: "block" }}
              width="100%"
              maxW="100vw"
              className="image7"
            />
            <Image
              src="/images/image7M.png"
              alt="Image 7"
              display={{ base: "block", md: "none" }}
              w="100%"
            />
            <Flex
              p="20"
              position="absolute"
              bottom="0"
              left="0"
              flexDirection="column"
              zIndex={2}
            >
              <Text
                color="white"
                fontFamily="Travels"
                fontWeight="400"
                fontSize={{ base: "25px", md: "32px" }}
              >
                02
              </Text>
              <Text
                color="white"
                fontFamily="Travels"
                fontWeight="900"
                textTransform="uppercase"
                fontSize={{ base: "25px", md: "32px" }}
              >
                Los Pinos 4
              </Text>
              <Box my="3">
                <hr />
              </Box>
              <Text
                color="#EBEBEB"
                fontFamily="Ubuntu Mono"
                fontWeight="400"
                fontSize="14px"
              >
                Respirá, tenés opciones
              </Text>
              <Link href="/proyectos/lospinos4">
                <Button
                  mt="5"
                  type="link"
                  textAlign="center"
                  color="white"
                  textTransform="uppercase"
                  fontFamily="Travels"
                  bgColor="#EC6E44"
                  h="36px"
                  _hover={{ bgColor: "#9EAC8E" }}
                >
                  Ver Proyecto
                </Button>
              </Link>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WavyGrid;
