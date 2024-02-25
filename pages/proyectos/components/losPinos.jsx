import {
  Box,
  SimpleGrid,
  Button,
  Text,
  Image,
  Flex,
  Link,
  Heading,
} from "@chakra-ui/react";

const LosPinos = () => {
  return (
    <Box bgColor="#1D1C1C" overflowX="hidden">
      {/* PROYECTO 1 */}
      <Box
        position="relative"
        maxW="1280px"
        mx="auto"
        backgroundImage={{
          base: "url('/images/proyectos/losPinos.png')",
          md: "url('/images/neanderBg.png')",
          xl: "",
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        minH={{base:"55vh",md:"65vh", xl: "650px"}}
        overflowY="hidden"
      >
        <Image
          src="/images/proyectos/bg2.png"
          alt="Image 3"
          w="100%"
          h="100%"
          minH={{base:"55vh",md:"65vh"}}
          display={{ base: "block", xl: "none" }}
        />
        <Image
          position="absolute"
          display={{ base: "none", xl: "block" }}
          inset="0"
          right="-20"
          src="/images/proyectos/bgTestXlLosPinos.png"
        />

        <Flex
          bottom="5%"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          textAlign="right"
          paddingX={{ base: "2rem", md: "3rem", xl: "5%" }}
          py={10}
          position="absolute"
        >
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
            Los Pinos 4
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
          <Link href="/proyectos/lospinos4">
            <Button
              mt="5"
              type="link"
              textAlign="center"
              textTransform="uppercase"
              color="#1A6626"
              fontFamily="Travels"
              bgColor="white"
              h="36px"
              width="fit-content"
            >
              Ver Proyecto
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default LosPinos;
