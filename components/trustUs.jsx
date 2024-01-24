import { Box, Flex, Image, Link, useBreakpointValue } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";

const TrustUs = () => {
  const brands = [
    "GALICIA",
    "VERDE MUNDO",
    "INMOBILIARIA",
    "PINK",
    "GALICIA",
    "VERDE MUNDO",
    "INMOBILIARIA",
    "PINK",
  ];

  const isGradientEnabled = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      backgroundColor="#1D1C1C"
      maxW="100vw"
      overflowX="hidden"
      position="relative"
    >
      <Box maxW="1280px" mx="auto">
        {/* Heading */}
        <Flex
          align="center"
          justify="center"
          gap={20}
          pt={10}
          paddingX={{ base: "1rem", md: "3rem", xl: "0" }}
        >
          <Image
            src="/images/brand.png"
            alt="Company Logo"
            boxSize="150px"
            display={{ base: "none", md: "block" }}
          />
          <Box
            color="#EBEBEB"
            fontFamily="Travels"
            fontWeight="700"
            fontSize={{ base: "24px", md: "48px" }}
            lineHeight={{ base: "26px", md: "48px" }}
          >
            LA{" "}
            <Box as="span" color="#9EAC8E" fontWeight="900">
              NATURALEZA
            </Box>{" "}
            COMO EL MOTOR DE NUESTROS{" "}
            <Box as="span" color="#9EAC8E" fontWeight="900">
              DESSARROLLOS
            </Box>
          </Box>
        </Flex>

        {/* Separador */}
        <Flex
          align="center"
          justify="center"
          mt={8}
          mb={{base: 10, md: 20}}
          mx="auto"
          maxW="100%"
          overflowX="hidden"
        >
          <Image
            src="/images/vector1.png"
            alt="Separator Left"
            flex="1"
            mr={4}
          />
          <Box
            color="#EBEBEB"
            align="center"
            justify="center"
            fontSize="14px"
            fontFamily="Ubuntu Mono"
            whiteSpace="nowrap"
          >
            Confían en nosotros
          </Box>
          <Image
            src="/images/vector2.png"
            alt="Separator Right"
            flex="1"
            ml={4}
          />
        </Flex>

        <Flex pb={10}>
          <Marquee
            speed={40}
            style={{
              position: "absolute", // Puedes usar "fixed" si quieres que sea fijo en la pantalla
              width: "100%",
              maxWidth: "100vw",
              bottom: "15px", // Ajusta la posición según tu diseño
              left: 0,
            }}
          >
            {brands.map((brand, index) => (
              <Box
                key={index}
                p={4}
                mx={2}
                color="#FFFFFF99"
                fontFamily="Travels"
                fontWeight="700"
                fontSize={{ base: "16px", md: "25px", lg: "32px" }}
              >
                {brand}
              </Box>
            ))}
          </Marquee>
        </Flex>
      </Box>
    </Box>
  );
};

export default TrustUs;
