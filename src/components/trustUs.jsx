import { Box, Flex, Image, Link, useBreakpointValue } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";

const TrustUs = () => {
  const brands = [
    "SUSTENTABILIDAD",
    "COMPROMISO",
    "NATURALEZA",
    "INVERSIÓN",
    "COMUNIDAD",
    "SUSTENTABILIDAD",
    "COMPROMISO",
    "NATURALEZA",
    "INVERSIÓN",
  ];

  const isGradientEnabled = useBreakpointValue({ base: false, xl: true });

  return (
    <Box
      backgroundColor="#1D1C1C"
      maxW="100vw"
      position=""
    >
      <Box
        maxW="1280px"
        mx="auto"
        position="relative"
      >
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
          mb="10"
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
            Nuestros valores
          </Box>
          <Image
            src="/images/vector2.png"
            alt="Separator Right"
            flex="1"
            ml={4}
          />
        </Flex>

        <Flex
          pb={10}
        >
          <Marquee speed={40}>
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