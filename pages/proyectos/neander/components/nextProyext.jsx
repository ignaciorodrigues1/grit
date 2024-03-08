import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import FadeInFrom from "../../../../components/animations/fadeInFrom";
import { FaD } from "react-icons/fa6";

const NextProject = () => {
  const bgImageUrl = useBreakpointValue({
    base: "/images/neander/nextProyectM.png",
    md: "/images/neander/nextProyect.png",
  });

  return (
    <Box position="relative" p="10" bg="#1D1C1C" h="full" w="full">
      <Box maxWidth="1280px" mx="auto">
        <Heading
          textAlign="center"
          color="white"
          mb={8}
          fontFamily="Travels"
          fontSize={{ base: "27px", md: "35px" }}
        >
          OTROS PROYECTOS
        </Heading>

        <FadeInFrom id="nextProyect" direction="bottom">
          <Box position="relative">
            <Image
              src={bgImageUrl}
              alt="Fondo del Proyecto"
              objectFit="cover"
              w="full"
              minH={{ base: "500px", sm: "350px", md: "250px" }}
            />

            <Box>
              <Image
                src="/images/neander/color.png"
                alt="Detalle de Color"
                position="absolute"
                right="0"
                top="0"
                bottom="0"
                h="100%"
                w="50%"
              />
              <Flex
                direction="column"
                justify="center"
                align="flex-end"
                position="absolute"
                top="0"
                bottom="0"
                left="0"
                p={{ base: "5%", xl: "0" }}
                textAlign="right"
                zIndex="2"
                h="100%"
              >
                <Heading
                  color="white"
                  fontSize={{ base: "35px", sm: "6vw", md: "35px", lg: "45px" }}
                  fontWeight="bold"
                  fontFamily="Travels"
                  textTransform="uppercase"
                  lineHeight={{
                    base: "35px",
                    sm: "6vw",
                    md: "35px",
                    lg: "47px",
                  }}
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
                  ml="auto"
                >
                  El profundo compromiso se ve reflejado en cada una de nuestras
                  obras, las cuales se distinguen por su calidad, cuidado del
                  medio ambiente e integración con la comunidad.
                </Text>
                <Link href="/proyectos/lospinos4" style={{ marginTop: "20px" }}>
                  <Button
                    mt="2"
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
        </FadeInFrom>
      </Box>
    </Box>
  );
};

export default NextProject;
