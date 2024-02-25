import { Box, SimpleGrid, Text, Image, Flex, Heading } from "@chakra-ui/react";
import FadeInFrom from "../../../components/animations/fadeInFrom";

const WavyGrid2 = () => {
  return (
    <Box bgColor="#1D1C1C" overflowX="hidden">
      <Box maxW="1280px" mx="auto" position="relative">
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

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={0}
          alignItems="center"
        >
          {/* First Row/Column */}
          <Box position="relative" h="100%" mr={{ md: "-5.5%", xl: "-4.8%" }}>
            <Image
              src="/images/empresa/image1.png"
              alt="Image 6"
              display={{ base: "none", md: "block", xl: "none" }}
              width="100%"
            />
            <Image
              src="/images/empresa/imageTest.png"
              alt="Image 6"
              display={{ base: "none", xl: "block" }}
              width="100%"
            />
            <Image
              src="/images/empresa/image1M.png"
              alt="Image 6"
              display={{ base: "block", md: "none" }}
              width="100%"
            />
          </Box>

          {/* Second Row/Column */}
          <FadeInFrom id="info1" direction="right">
            <Box position="relative">
              <Heading
                fontSize={{ base: "20px", sm: "6vw", md: "4vw", lg: "48px" }}
                fontWeight="bold"
                fontFamily="Travels"
                lineHeight={{ base: "33px", sm: "6vw", md: "30px", lg: "48px" }}
                pt={{ base: "5", md: "" }}
                color="white"
                textTransform="uppercase"
                ml={{ md: "-50%", lg: "-75%" }}
                whiteSpace="nowrap"
                p={{ base: "5%", md: "0" }}
                mt="2%"
                pb={{ md: "2", lg: "5" }}
              >
                <Box fontWeight="700">
                  Un camino de <br />
                  <Box paddingLeft={{ base: "5%", md: "25%" }} fontWeight="900">
                    transformación
                  </Box>
                </Box>
              </Heading>

              <Text
                textAlign="left"
                color="white"
                fontSize={{ base: "14px", lg: "16px" }}
                fontWeigh="700"
                fontFamily="Ubuntu Mono"
                lineHeight="20px"
                w={{ sm: "90%", lg: "75%" }}
                p={{ base: "5%", md: "0" }}
                pb={{ lg: "5" }}
                pl={{ lg: "5" }}
              >
                Con una sólida trayectoria en Los Pinos I, II y III, Zorila S.A.
                agrega valor mediante la profesionalización y la incorporación
                de socios estratégicos con experiencia en infraestructura,
                servicios y calidad. En este proceso, Constantino Zorila y
                Martín Weller fundan GRIT.
              </Text>

              <Box
                backgroundColor="#9EAD8E1A"
                p={{ base: "3%" }}
                my="4"
                mx="auto"
                color="white"
                w="75%"
                mb={{ lg: "5" }}
              >
                <Text
                  textAlign="center"
                  fontFamily="Travels"
                  fontWeig="700"
                  fontSize="16px"
                  color="#9EAD8E"
                  textTransform="uppercase"
                >
                  Integramos la sociedad y el ecosistema natural
                </Text>
              </Box>

              <Text
                textAlign="right"
                color="white"
                fontSize={{ base: "14px", lg: "16px" }}
                fontWeigh="700"
                fontFamily="Ubuntu Mono"
                lineHeight="20px"
                w={{ sm: "90%", lg: "75%" }}
                ml="auto"
                p={{ base: "5%", md: "0" }}
                mr={{ md: "5%" }}
                mt={{ md: "5%" }}
              >
                Proponen desarrollos urbanísticos distintivos por su compromiso
                ambiental y comunitario, creando espacios que integran sociedad
                y ecosistema desde el inicio, estableciendo relaciones a largo
                plazo.
              </Text>
            </Box>
          </FadeInFrom>
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={0}
          alignItems="center"
        >
          {/* First Row/Column */}
          <FadeInFrom id="info2" direction="left">
            <Box position="relative">
              <Heading
                fontSize={{ base: "20px", sm: "6vw", md: "4vw", lg: "48px" }}
                fontWeight="bold"
                fontFamily="Travels"
                lineHeight={{ base: "33px", sm: "6vw", md: "30px", lg: "48px" }}
                pt={{ base: "5", md: "" }}
                color="white"
                textTransform="uppercase"
                ml="5%"
                whiteSpace="nowrap"
                p={{ base: "5%", md: "0" }}
                mt="4%"
                pb={{ lg: "5" }}
              >
                <Box fontWeight="700">
                  Nuestro <br />
                  <Box fontWeight="900">equipo</Box>
                </Box>
              </Heading>

              <Text
                textAlign="left"
                color="white"
                fontSize={{ base: "14px", lg: "16px" }}
                fontWeigh="700"
                fontFamily="Ubuntu Mono"
                lineHeight="20px"
                w={{ sm: "90%", lg: "75%" }}
                pt="2%"
                pl="5%"
              >
                Proponen desarrollos urbanísticos distintivos por su compromiso
                ambiental y comunitario, creando espacios que integran sociedad
                y ecosistema desde el inicio, estableciendo relaciones a largo
                plazo.
              </Text>
            </Box>
          </FadeInFrom>

          <Box position="relative" ml={{ base: "0", md: "-5%" }}>
            <Image
              src="/images/empresa/image2.png"
              alt="Image 6"
              display={{ base: "none", md: "block", xl: "none" }}
              width="100%"
            />
            <Image
              src="/images/empresa/imageTest2.png"
              alt="Image 6"
              display={{ base: "none", xl: "block" }}
              width="100%"
            />
            <Image
              src="/images/empresa/image2M.png"
              alt="Image 6"
              display={{ base: "block", md: "none" }}
              width="100%"
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WavyGrid2;
