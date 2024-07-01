import {
  Image,
  Box,
  Flex,
  SimpleGrid,
  Heading,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";
import ImageAnimation from "../../../components/animations/linesFromTop";
import FadeInFrom from "../../../components/animations/fadeInFrom";

const Neander = () => {
  return (
    <Box
      bgColor="#1D1C1C"
      overflowX="hidden"
      position="relative"
      h="75vh"
      zIndex="0"
    >
      {/* Imagen de fondo */}
      <Box
        as="img"
        src="/images/proyectos/neander.png"
        alt="Background Image"
        w="100%"
        h="100%"
        objectFit="cover"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
      />

      <Flex
        bottom="5%"
        flexDirection="column"
        justifyContent="flex-start" // This ensures content is aligned to the right
        alignItems="flex-start"
        textAlign="left"
        py={10}
        pl={{base: "5%", xl: "0"}}
        position="absolute"
        overflow="hidden"
        maxW="1280px"
        w="100%"
        mx="auto"
        right="0"
        left="0"
        zIndex="99"
      >
        <FadeInFrom id="tile2" direction="right">
          <Text
            color="white"
            fontSize="16px"
            fontFamily="Travels"
            fontWeight="300"
            textTransform="uppercase"
            pb="1"
          >
            Proyecto
          </Text>

          <Heading
            color="white"
            fontSize={{ base: "35px", sm: "6vw", md: "55px", lg: "72px" }}
            fontWeight="bold"
            fontFamily="Travels"
            textTransform="uppercase"
            lineHeight={{ base: "35px", sm: "6vw", md: "55px", lg: "67px" }}
            textShadow="0px 0px 12px rgba(0, 0, 0, 0.65)"
            pb="5"
          >
            Neander
          </Heading>

          <Text
            color="#EBEBEB"
            fontSize="14px"
            fontFamily="Ubuntu Mono"
            maxWidth="60%"
            mr="auto"
          >
            El profundo compromiso se ve reflejado en cada una de nuestras
            obras, las cuales se distinguen por su calidad, cuidado del medio
            ambiente e integración con la comunidad.
          </Text>

          <Link href="/proyectos/neander">
            <Button
              mt="5"
              type="link"
              textAlign="center"
              textTransform="uppercase"
              color="#4139C6"
              fontFamily="Travels"
              bgColor="white"
              h="36px"
              width="fit-content"
            >
              Ver Proyecto
            </Button>
          </Link>
        </FadeInFrom>
      </Flex>

      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        spacing={0}
        zIndex="5"
        position="absolute"
        inset={0}
      >
        <Box />

        <Box />

        <ImageAnimation delay={1.3}>
          <Box
            display={{ base: "none", md: "block" }}
            left="0"
            ml={{ md: "-19px" }}
          >
            <Image src="/images/vectorC.png" alt="Image 3" h="75vh" />
          </Box>
        </ImageAnimation>

        <ImageAnimation delay={1.6}>
          <Box
            display={{ base: "none", md: "block" }}
            left="0"

          >
            <Image src="/images/vectorL-R.png" alt="Image 4" h="75vh" />
          </Box>
        </ImageAnimation>
      </SimpleGrid>
    </Box>
  );
};

export default Neander;
