import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import FadeInFrom from "../../../components/animations/fadeInFrom";

const WavyGrid = () => {
  return (
    <Box bgColor="#1D1C1C" overflowX="hidden">
      <Box maxW="1280px" mx="auto" position="relative">
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
            <FadeInFrom id="title" direction="left">
              <Flex flexDirection="column">
                <Text
                  color="#EBEBEB"
                  fontFamily="Travels"
                  fontWeight="700"
                  pb={2}
                  fontSize={{ base: "20px", sm: "5vw", md: "38px" }}
                  lineHeight={{ base: "26px", sm: "5vw", md: "38px" }}
                >
                  BENEFICIOS
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
              </FadeInFrom>
            </Box>

          <Box display={{ base: "none", md: "block" }} ml="-18px">
            <Image src="/images/empresa/vectorR-L.png" alt="Image 1" />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={0}>
          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="row"
            position="relative"
            minH="270px"
            w="100%"
          >
            <Flex
              my="auto"
              mx="auto"
              alignItems="center"
              flexDirection="column"
              w="100%"
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

            <Box
              display={{ base: "none", md: "block" }}
              right="0"
              position="absolute"
              mr={{ md: "-34px" }}
            >
              <Image src="/images/empresa/vectorC.png" alt="Divisor" />
            </Box>
          </Flex>

          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="row"
            position="relative"
            minH="270px"
            w="100%"
          >
            <Flex
              my="auto"
              mx="auto"
              alignItems="center"
              flexDirection="column"
              w="100%"
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

            <Box
              display={{ base: "none", md: "block" }}
              right="0"
              position="absolute"
              mr={{ md: "-34px" }}
            >
              <Image src="/images/empresa/vectorR-L.png" alt="Divisor" />
            </Box>
          </Flex>

          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="row"
            position="relative"
            minH="270px"
            w="100%"
          >
            <Flex
              my="auto"
              mx="auto"
              alignItems="center"
              flexDirection="column"
              w="100%"
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

            <Box
              display={{ base: "none", md: "block" }}
              right="0"
              position="absolute"
              mr={{ md: "-34px" }}
            >
              <Image src="/images/empresa/vectorC.png" alt="Divisor" />
            </Box>
          </Flex>

          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="row"
            position="relative"
            minH="270px"
          >
            <Flex
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
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WavyGrid;
