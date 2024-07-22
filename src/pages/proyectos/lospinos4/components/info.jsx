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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="icon">
                      <path d="M185.7 32c-30.4 0-57.5 19-67.7 47.6L8.6 383.6C-8.3 430.5 26.4 480 76.3 480l423.4 0c49.9 0 84.6-49.5 67.7-96.4L458 79.6C447.7 51 420.6 32 390.3 32L185.7 32zM163.2 95.9c3.4-9.5 12.5-15.9 22.6-15.9L264 80l0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24 78.3 0c10.1 0 19.2 6.3 22.6 15.9l109.4 304c5.6 15.6-6 32.1-22.6 32.1L312 432l0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24L76.3 432c-16.6 0-28.2-16.5-22.6-32.1l109.4-304zM312 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80z"/>
                    </svg>

                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      Cordón cuneta
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="icon">
                      <path d="M24 0C17.3 0 10.9 2.8 6.3 7.8S-.5 19.4 .1 26.1L36.3 446.2C39.5 483.4 70.7 512 108 512L276 512c37.4 0 68.5-28.6 71.7-65.8L383.9 26.1c.6-6.7-1.7-13.3-6.2-18.3s-11-7.8-17.7-7.8L24 0zM57.6 134.3L50.2 48l283.7 0-7.4 86.3-25.2 14c-16.2 9-36.2 7.3-50.7-4.3c-34.2-27.4-82.8-27.4-117 0C119 155.6 99 157.3 82.8 148.3l-25.2-14zm5 57.6c32.7 16.6 72.1 12.6 100.9-10.4c16.7-13.3 40.4-13.3 57 0c28.8 23 68.3 27 100.9 10.4L299.9 442.1C298.8 454.5 288.4 464 276 464L108 464c-12.5 0-22.8-9.5-23.9-21.9L62.6 191.9z"/>
                    </svg>
                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Red de agua potable
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon">
                      <path d="M256 464c7.4 0 27-7.2 47.6-48.4c8.8-17.7 16.4-39.2 22-63.6l-139.2 0c5.6 24.4 13.2 45.9 22 63.6C229 456.8 248.6 464 256 464zM178.5 304l155 0c1.6-15.3 2.5-31.4 2.5-48s-.9-32.7-2.5-48l-155 0c-1.6 15.3-2.5 31.4-2.5 48s.9 32.7 2.5 48zm7.9-144l139.2 0c-5.6-24.4-13.2-45.9-22-63.6C283 55.2 263.4 48 256 48s-27 7.2-47.6 48.4c-8.8 17.7-16.4 39.2-22 63.6zm195.3 48c1.5 15.5 2.2 31.6 2.2 48s-.8 32.5-2.2 48l76.7 0c3.6-15.4 5.6-31.5 5.6-48s-1.9-32.6-5.6-48l-76.7 0zm58.8-48c-21.4-41.1-56.1-74.1-98.4-93.4c14.1 25.6 25.3 57.5 32.6 93.4l65.9 0zm-303.3 0c7.3-35.9 18.5-67.7 32.6-93.4c-42.3 19.3-77 52.3-98.4 93.4l65.9 0zM53.6 208c-3.6 15.4-5.6 31.5-5.6 48s1.9 32.6 5.6 48l76.7 0c-1.5-15.5-2.2-31.6-2.2-48s.8-32.5 2.2-48l-76.7 0zM342.1 445.4c42.3-19.3 77-52.3 98.4-93.4l-65.9 0c-7.3 35.9-18.5 67.7-32.6 93.4zm-172.2 0c-14.1-25.6-25.3-57.5-32.6-93.4l-65.9 0c21.4 41.1 56.1 74.1 98.4 93.4zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512z"/>
                    </svg>
                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Fibra óptica
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon">
                      <path d="M435.4 361.4l-89.7-6c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-22 87.2c-14.4 3.2-29.4 4.8-44.8 4.8s-30.3-1.7-44.8-4.8l-22-87.2c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-89.7 6C61.7 335.9 51.9 307 49 276.2L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15L100.4 118c19.9-22.4 44.6-40.5 72.4-52.7l69.1 57.6c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l69.1-57.6c27.8 12.2 52.5 30.3 72.4 52.7l-33.4 83.4c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9L463 276.2c-3 30.8-12.7 59.7-27.6 85.2zM256 48l.9 0-1.8 0 .9 0zM56.7 196.2c.9-3 1.9-6.1 2.9-9.1l-2.9 9.1zM132 423l3.8 2.7c-1.3-.9-2.5-1.8-3.8-2.7zm248.1-.1c-1.3 1-2.6 2-4 2.9l4-2.9zm75.2-226.7l-3-9.2c1.1 3 2.1 6.1 3 9.2zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6l59.2 0c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"/>
                    </svg>
                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      Gran plaza recreativa
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
                    <Image src="/images/losPinos/inversion.png" alt="crecimiento" />

                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      crecimiento
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
                    <Image src="/images/losPinos/recreacion.png" alt="recreacion" />

                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                    >
                      recreación
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
