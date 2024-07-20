import { Image, Box, Flex, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import FadeInFrom from "../../../components/animations/fadeInFrom";
import ImageAnimation from "../../../components/animations/linesFromTop";

const Hero = () => {
  return (
    <Box
      bgColor="#1D1C1C"
      overflowX="hidden"
      backgroundImage={{
        base: "url('/images/empresa/equipo-1.jpg')",
        md: "url('/images/empresa/equipo-1.jpg')",
      }}
      backgroundSize="cover"
      backgroundPosition="center"
      h={{ base: "75vh", md: "700px" }}
      position="relative"
      zIndex="0"
    >
      <Box position="absolute" height="100%" width="100%" background="rgba(0,0,0,0.50)" top="0" left="0"></Box>
      <Box maxW="1280px" mx="auto">
        <Flex
          maxW="1280px"
          mx="auto"
          bottom="0"
          flexDirection="column"
          justifyContent="left"
          alignItems="left"
          textAlign="left"
          paddingX={{ base: "2rem", md: "3rem", xl: "0" }}
          py={10}
          position="absolute"
        >
          <FadeInFrom id="title" direction="left">
            <Heading
              color="white"
              fontSize={{ base: "35px", sm: "6vw", md: "55px", lg: "72px" }}
              lineHeight={{ base: "35px", sm: "6vw", md: "55px", lg: "67px" }}
              fontWeight="bold"
              fontFamily="Archivo"
              textTransform="uppercase"
              textShadow="0px 0px 12px rgba(0, 0, 0, 0.65)"
              pb="5"
            >
              SOMOS GRIT
            </Heading>
          </FadeInFrom>
          <FadeInFrom id="title" direction="left">
            <Text
              color="#EBEBEB"
              fontSize="14px"
              fontFamily="Archivo"
              fontWeight="400"
              maxWidth={{ md: "60%" }}
            >
              Grit propone desarrollos urbanísticos innovadores, que se distinguen por su compromiso ambiental e impacto en la comunidad, creando espacios que integran a la sociedad y al ecosistema natural desde el inicio, estableciendo relaciones a largo plazo, respetando las tradiciones y valores culturales.
            </Text>
          </FadeInFrom>
        </Flex>

        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacing={0}
          zIndex="5"
          position="absolute"
          inset={0}
          maxW="1280px"
          mx="auto"
        >
          <Box />

          <ImageAnimation delay={1}>
            <Box
              display={{ base: "none", md: "block" }}
              left="0"
              ml={{ md: "-34px" }}
            >
              <Image src="/images/vectorL-R.png" alt="Image 2" h="700px" />
            </Box>
          </ImageAnimation>

          <ImageAnimation delay={1.3}>
            <Box
              display={{ base: "none", md: "block" }}
              left="0"
              ml={{ md: "-34px" }}
            >
              <Image src="/images/vectorC.png" alt="Image 3" h="700px" />
            </Box>
          </ImageAnimation>

          <ImageAnimation delay={1.6}>
            <Box
              display={{ base: "none", md: "block" }}
              left="0"
              ml={{ md: "-34px" }}
            >
              <Image src="/images/vectorL-R.png" alt="Image 4" h="700px" />
            </Box>
          </ImageAnimation>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Hero;
