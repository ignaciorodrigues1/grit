import {
  Box,
  Button,
  Text,
  Image,
  Flex,
  Link,
  Heading,
} from "@chakra-ui/react";

import FadeInFrom from "../../../components/animations/fadeInFrom";

const Neander = () => {
  return (
    <Box bgColor="#1D1C1C" overflowX="hidden">
      <Box
        position="relative"
        maxW="1280px"
        mx="auto"
        backgroundImage={{
          base: "url('/images/heroMobile.png')",
          md: "url('/images/neanderBg.png')",
          xl: "",
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        minH={{ base: "55vh", md: "65vh", xl: "650px" }}
        overflowY="hidden"
      >
        <Image
          src="/images/proyectos/bg1.png"
          alt="Image 3"
          w="100%"
          h="100%"
          minH={{ base: "55vh", md: "65vh" }}
          display={{ base: "block", xl: "none" }}
        />
        <Image
          position="absolute"
          display={{ base: "none", xl: "block" }}
          inset="0"
          src="/images/proyectos/bgTestXlNeander.png"
        />

        <Flex
          bottom="5%"
          flexDirection="column"
          justifyContent="left"
          alignItems="left"
          textAlign="left"
          paddingX={{ base: "2rem", md: "3rem", xl: "5%" }}
          py={10}
          position="absolute"
        >
          <FadeInFrom id="tile" direction="left">
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
              lineHeight={{ base: "25px", sm: "6vw", md: "55px", lg: "67px" }}
              textShadow="0px 0px 12px rgba(0, 0, 0, 0.65)"
              pb="5"
            >
              NEANDER
            </Heading>
            <Text
              color="#EBEBEB"
              fontSize="14px"
              fontFamily="Ubuntu Mono"
              maxWidth="60%"
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
      </Box>
    </Box>
  );
};

export default Neander;
