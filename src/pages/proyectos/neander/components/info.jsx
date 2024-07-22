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
    <Box bgColor="#4038C5">
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
                  backgroundImage="url('/images/neander/neander-drone-1.jpg')"
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
                      textAlign="center"
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
                  backgroundImage="url('/images/neander/neander-drone-2.jpg')"
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
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                    px="16px"
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
                  backgroundImage="url('/images/neander/neander-drone-3.jpg')"
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
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                    px="16px"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="icon">
                      <path d="M528 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM461.8 266.6c-1.1 3.2 0 6.6 2.5 8.7l16.3 13.3 32.4-103.8c.1-.3 .2-.7 .3-1c-6.7-3.5-14-5.9-21.7-7.1l-29.9 89.8zm59 54.6l50.1 40.7c6.9 5.6 11.8 13.4 13.8 22.1l22.8 98.6c3 12.9-5.1 25.8-18 28.8s-25.8-5.1-28.8-18l-22.1-96L434 312.6c-18.1-14.7-25.2-39.1-17.8-61.2L439 183.1c-24.7 9.8-44.7 28.9-55.6 53.3l-9.5 21.3c-5.4 12.1-19.6 17.6-31.7 12.2s-17.6-19.6-12.2-31.7l9.5-21.3c17.1-38.5 49.6-68 89.5-81.3c15.3-5.1 31.3-7.7 47.4-7.7l4.9 0c52.5 0 98.7 34.8 113.2 85.4l10.9 38.1L633 279c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L570 283.9c-4.8-4.8-8.3-10.8-10.2-17.3l-10.5-36.7-28.5 91.3zm-101.1 21l39 31.7-19.2 48c-2 5-5 9.6-8.9 13.4L361 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l68.5-68.5 24.1-60.4zM255.2 5.4L391.9 116.8c-14.8 7.8-28.4 17.5-40.5 28.9L240 55 112 159.3 112 360c0 4.4 3.6 8 8 8l200 0 40 0 14.9 0-6.6 16.5L336.8 416 120 416c-30.9 0-56-25.1-56-56l0-161.6L39.2 218.6c-10.3 8.4-25.4 6.8-33.8-3.4s-6.8-25.4 3.4-33.8l216-176c8.8-7.2 21.5-7.2 30.3 0zM160 208c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64z"/>
                    </svg>
                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Intertrabado en todo el barrio
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
                  backgroundImage="url('/images/neander/neander-drone-4.jpg')"
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
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                    px="16px"
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="icon">
                      <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM131.1 80l389.6 0L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>
                    </svg>
                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Gran área comercial y deportiva plaza
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
                  backgroundImage="url('/images/neander/neander-drone-1.jpg')"
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
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="icon">
                      <path d="M176 300.8c0 26.7 8.9 52.3 24.7 73.6c-.5-4.3-.7-8.7-.7-13.1c0-31.9 12.4-72.4 31.4-104.9c9.6-16.5 21.7-32.1 36-43.8C281.7 200.9 299.5 192 320 192c20.4 0 38.2 8.9 52.4 20.7s26.3 27.3 36 43.8c19.1 32.5 31.6 73 31.6 104.9c0 4.3-.2 8.5-.6 12.7C455 352.8 464 327.4 464 300.8c0-38.2-17.9-96.6-49.1-145.7C382.2 103.7 346.7 80 320 80c-27.3 0-62.7 23.8-95.2 75C193.7 204.1 176 262.5 176 300.8zm72 60.5c0 21.8 9.2 41.2 24 54.5l0 58.6c-45.3-10.8-84-36.5-109.8-71.1L90.9 385.5C37.5 372.1 0 324.1 0 269l0-85c0-30.9 25.1-56 56-56l129.1 0C219.8 73.8 267.4 32 320 32c52.1 0 99.7 41.8 134.5 96L584 128c30.9 0 56 25.1 56 56l0 85c0 55.1-37.5 103.1-90.9 116.4l-71.6 17.9c-26 34.6-64.7 60.2-109.5 71l0-58.7c14.7-13.3 24-32.6 24-54.3c0-21.6-9.2-53.7-25-80.6c-7.8-13.2-16.4-23.9-25.1-31.1s-16-9.7-21.9-9.7c-6 0-13.5 2.6-22.1 9.7c-8.7 7.1-17.3 17.8-25.1 31c-15.7 26.8-24.8 59-24.8 80.6zm257.6-14.5l31.8-8c32.1-8 54.5-36.8 54.5-69.9l0-85c0-4.4-3.6-8-8-8l-103.3 0c19.8 43.2 31.3 88.7 31.3 124.8c0 16-2.2 31.4-6.4 46.1zM159.1 176L56 176c-4.4 0-8 3.6-8 8l0 85c0 33 22.5 61.8 54.5 69.9l31.8 7.9c-4.1-14.7-6.3-30.1-6.3-46c0-36.1 11.4-81.6 31.1-124.8zM296 328c0-13.3 10.7-24 24-24s24 10.7 24 24l0 184-48 0 0-184z"/>
                    </svg>
                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Gas natural
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
                  backgroundImage="url('/images/neander/neander-drone-2.jpg')"
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

          <FadeInFrom id="info5" direction="bottom">
            <AspectRatio ratio={{ base: 2 / 1, md: 1 / 2 }}>
              <Flex
                direction={{ base: "row", md: "column" }}
                mt={{ base: "", md: "-40%" }}
              >
                <Box
                  w="100%"
                  h="100%"
                  backgroundImage="url('/images/neander/neander-drone-2.jpg')"
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
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="icon">
                      <path d="M140.3 2.5c-14.9-6.2-32.1-.3-40.1 13.7l-96 168c-4.6 8-5.5 17.5-2.5 26.2s9.5 15.7 18 19.2l158.1 65.9L137.9 400 64 400l0-16c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48 0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 96 0c13.3 0 25.2-8.2 29.9-20.6l47-123.4 70.8 29.5c9.9 4.1 21.2 3 30.1-2.9l192-128c9.8-6.5 15.2-18 14.1-29.7s-8.6-21.9-19.5-26.5l-384-160zM513.4 398.6c3.9 1.8 8.4 1.9 12.5 .3s7.2-4.7 8.9-8.7l40-96c3.3-8-.3-17.2-8.3-20.8l-36.7-16.3L396.9 345.6l116.5 52.9z"/>
                    </svg>
                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Cámaras de seguridad
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
                  backgroundImage="url('/images/neander/neander-drone-3.jpg')"
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
                  <Flex
                    color="white"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="icon">
                      <path d="M224 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96c4.5 0 8.9-.5 13.1-1.3l38.1 83.2c-26.6 17.2-45.4 45.4-50.1 78.1L126 288c-7.1-27.6-32.2-48-62-48c-35.3 0-64 28.7-64 64s28.7 64 64 64c29.8 0 54.9-20.4 62-48l99.2 0c7.8 54.3 54.4 96 110.9 96c35 0 66.3-16.1 86.8-41.2l91.8 55.1c-1.7 5.8-2.6 11.9-2.6 18.2c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-17.5 0-33.4 7-44.9 18.4l-91.8-55.1c5.6-13.3 8.7-28 8.7-43.3c0-18.7-4.6-36.3-12.7-51.8l101.8-73.3c10.8 8.2 24.2 13.1 38.8 13.1c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64c0 9.1 1.9 17.8 5.4 25.7L416.6 226.2c-20.4-21.1-49-34.2-80.6-34.2c-11 0-21.6 1.6-31.7 4.5l-38.5-84.1C279.4 100.7 288 83.4 288 64c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zM576 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM544 448a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM64 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm272-48a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
                    </svg>
                    <Text
                      mt="2"
                      fontSize="lg"
                      fontFamily="Archivo"
                      fontWeight="700"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      Red de cloaca
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
