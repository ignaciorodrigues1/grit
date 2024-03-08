import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Center,
  AspectRatio,
} from "@chakra-ui/react";
import FadeInFrom from "../../../../components/animations/fadeInFrom";

const Info = () => {
  return (
    <Box bgColor="#1A6626">
      <Box maxW="1280px" mx="auto" w={{ md: "95%" }}>
        <SimpleGrid
          columns={{ base: "1", md: "3" }}
          spacing={{ base: "0", md: "1" }}
          gap={{ base: "0", md: "2" }}
        >
          <FadeInFrom id="info1" direction="bottom">
            <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
              <Flex
                direction={{ base: "row", md: "column" }}
                mt={{ base: "0", md: "-60%" }}
              >
                <Box
                  w="100%"
                  h="100%"
                  backgroundImage="url('/images/losPinos/image1.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Center
                  w="100%"
                  h="100%"
                  minH={{ base: "", md: "250.67px" }}
                  bgColor="#319B41"
                >
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Image src="/images/losPinos/viviendas.png" alt="viviendas" />

                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Travels"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      Viviendas
                    </Text>
                  </Flex>
                </Center>
              </Flex>
            </AspectRatio>
          </FadeInFrom>

          <FadeInFrom id="info2" direction="bottom">
            <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
              <Flex
                direction={{ base: "row-reverse", md: "column" }}
                mt={{ base: "", md: "-40%" }}
              >
                <Box
                  w="100%"
                  h="100%"
                  backgroundImage="url('/images/losPinos/image2.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Center
                  w="100%"
                  h="100%"
                  minH={{ base: "", md: "250.67px" }}
                  bgColor="#319B41"
                >
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Image src="/images/losPinos/comunidad.png" alt="comunidad" />

                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Travels"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      Comunidad
                    </Text>
                  </Flex>
                </Center>
              </Flex>
            </AspectRatio>
          </FadeInFrom>

          <FadeInFrom id="info3" direction="bottom">
            <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
              <Flex
                direction={{ base: "row", md: "column" }}
                mt={{ base: "", md: "-20%" }}
              >
                <Box
                  w="100%"
                  h="100%"
                  backgroundImage="url('/images/losPinos/image3.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Center
                  w="100%"
                  h="100%"
                  minH={{ base: "", md: "250.67px" }}
                  bgColor="#319B41"
                >
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Image src="/images/losPinos/naturaleza.png" alt="naturaleza" />

                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Travels"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      Naturaleza
                    </Text>
                  </Flex>
                </Center>
              </Flex>
            </AspectRatio>
          </FadeInFrom>

          <FadeInFrom id="info4" direction="bottom">
            <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
              <Flex
                direction={{ base: "row-reverse", md: "column" }}
                mt={{ base: "", md: "-60%" }}
              >
                <Box
                  w="100%"
                  h="100%"
                  backgroundImage="url('/images/losPinos/image4.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Center
                  w="100%"
                  h="100%"
                  minH={{ base: "", md: "250.67px" }}
                  bgColor="#319B41"
                >
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Image src="/images/losPinos/familia.png" alt="familia" />

                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Travels"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      Familia
                    </Text>
                  </Flex>
                </Center>
              </Flex>
            </AspectRatio>
          </FadeInFrom>

          <FadeInFrom id="info5" direction="bottom">
            <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
              <Flex
                direction={{ base: "row", md: "column" }}
                mt={{ base: "", md: "-40%" }}
              >
                <Box
                  w="100%"
                  h="100%"
                  backgroundImage="url('/images/losPinos/image5.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Center
                  w="100%"
                  h="100%"
                  minH={{ base: "", md: "250.67px" }}
                  bgColor="#319B41"
                >
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Image src="/images/losPinos/inversion.png" alt="inversión" />

                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Travels"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      Inversión
                    </Text>
                  </Flex>
                </Center>
              </Flex>
            </AspectRatio>
          </FadeInFrom>

          <FadeInFrom id="info6" direction="bottom">
            <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
              <Flex
                direction={{ base: "row-reverse", md: "column" }}
                mt={{ base: "", md: "-20%" }}
              >
                <Box
                  w="100%"
                  h="100%"
                  backgroundImage="url('/images/losPinos/image6.png')"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundPosition="center"
                />
                <Center
                  w="100%"
                  h="100%"
                  minH={{ base: "", md: "250.67px" }}
                  bgColor="#319B41"
                >
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Image src="/images/losPinos/compromiso.png" alt="compromiso" />

                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Travels"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      Compromiso
                    </Text>
                  </Flex>
                </Center>
              </Flex>
            </AspectRatio>
          </FadeInFrom>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Info;
