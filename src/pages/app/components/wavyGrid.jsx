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
              my="auto"
            >
            <FadeInFrom id="title" direction="left">
              <Flex flexDirection="column">
                <Text
                  color="#EBEBEB"
                  fontFamily="Archivo"
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
                  fontFamily="Archivo"
                  maxWidth={{ base: "100%", md: "90%", lg: "75%", xl: "60%" }}
                >
                  En Grit, seguimos transformando la manera en que te conectás con la comunidad y gestionás tus inversiones.
                </Text>
              </Flex>
              </FadeInFrom>
            </Box>

          <Box display={{ base: "none", md: "block" }} ml="-18px">
            <Image src="/images/empresa/vectorR-L.png" alt="Image 1" />
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0} alignItems="start">
          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="row"
            position="relative"
            py="16px"
            w="100%"
          >
            <Flex
              my="auto"
              mx="auto"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
              w="90%"
            >
              <Image src="/images/app/comunidad.png" width={"50px"} alt="Icono 3" />

              <Text mt="2" fontSize="2xl" fontFamily="Archivo" fontWeight="700">
                COMPRA METROS CUADRADOS ONLINE
              </Text>

              <Text mt="2" fontSize="base" fontFamily="Archivo">Invertir en tu futuro ahora es simple y seguro. A través de la app, podés comprar metros cuadrados de manera rápida, segura e innovadora. Nuestro proceso de compra es transparente y diseñado para brindarte la mejor experiencia posible, reflejando nuestro compromiso con la calidad y la satisfacción del cliente.</Text>
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
            py="16px"
            w="100%"
          >
            <Flex
              my="auto"
              mx="auto"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
              w="90%"
            >
              <Image src="/images/app/inversion.png" width={"50px"} alt="Icono 3" />

              <Text mt="2" fontSize="2xl" fontFamily="Archivo" fontWeight="700">
                GRITTENS - NUESTRA CRIPTOMONEDA
              </Text>

              <Text mt="2" fontSize="base" fontFamily="Archivo">Innovamos en el mercado inmobiliario introduciendo los Gritens, nuestra criptomoneda exclusiva. Utilizá Gritens para realizar transacciones dentro de la app, garantizando una inversión segura y eficiente.</Text>
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
            py="16px"
            w="100%"
          >
            <Flex
              my="0"
              mx="auto"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
              w="90%"
            >
              <Image src="/images/app/compromiso.png" width={"50px"} alt="Icono 3" />

              <Text mt="2" fontSize="2xl" fontFamily="Archivo" fontWeight="700">
                COMUNIDAD GRIT
              </Text>

              <Text mt="2" fontSize="base" fontFamily="Archivo">Nuestra app se convierte en el punto de encuentro digital para todas las personas que forman parte de la comunidad Grit. Aquí, podrás conectar con otros vecinos, compartir experiencias y para disfrutar más de tu entorno.</Text>
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
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0} alignItems="start" mt="10">
          <Flex
            color="white"
            my="auto"
            mx="auto"
            alignItems="center"
            flexDirection="row"
            position="relative"
            py="16px"
            w="100%"
          >
            <Flex
              my="auto"
              mx="auto"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
              w="90%"
            >
              <Image src="/images/app/seguridad.png" width={"50px"} alt="Icono 3" />

              <Text mt="2" fontSize="2xl" fontFamily="Archivo" fontWeight="700">
                SEGURIDAD
              </Text>

              <Text mt="2" fontSize="base" fontFamily="Archivo">Todas las transacciones y datos personales están protegidos con tecnología avanzada, garantizando tu tranquilidad.</Text>
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
            py="16px"
            w="100%"
          >
            <Flex
              my="auto"
              mx="auto"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
              w="90%"
            >
              <Image src="/images/app/iphone.png" width={"50px"} alt="Icono 3" />

              <Text mt="2" fontSize="2xl" fontFamily="Archivo" fontWeight="700">
                FACILIDAD DE USO
              </Text>

              <Text mt="2" fontSize="base" fontFamily="Archivo">La interfaz intuitiva de nuestra app está diseñada para ser fácil de navegar, independientemente de tu nivel de experiencia tecnológica.</Text>
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
            py="16px"
            w="100%"
          >
            <Flex
              my="0"
              mx="auto"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
              w="90%"
            >
              <Image src="/images/app/notificaciones.png" width={"50px"} alt="Icono 3" />

              <Text mt="2" fontSize="2xl" fontFamily="Archivo" fontWeight="700">
                ACTUALIZACIONES Y NOTIFICACIONES
              </Text>

              <Text mt="2" fontSize="base" fontFamily="Archivo">Recibí actualizaciones en tiempo real sobre el estado de tus inversiones, nuevas oportunidades y eventos de la comunidad Grit.</Text>
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
        </SimpleGrid>

      </Box>
      <Text fontFamily="Archivo" fontSize="base" color="white" fontStyle="italic" px="4" mx="auto" textAlign="center">Ofrecemos asistencia personalizada para resolver tus dudas y guiarte en el proceso de inversión.</Text>
    </Box>
  );
};

export default WavyGrid;
