import { Box, Flex, Image, Link } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";

const TrustUs = () => {
  const brands = ["GALICIA", "VERDE MUNDO", "INMOBILIARIA", "PINK", "GALICIA", "VERDE MUNDO", "INMOBILIARIA", "PINK"];

  return (
    <Box backgroundColor="#1D1C1C" maxW="100vw">
      <Box maxW="1280px" mx="auto">
        {/* Heading */}
        <Flex
          align="center"
          justify="center"
          gap={20}
          py={8}
          paddingX={{base: "1rem", md: "3rem", xl: "0"}}
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
          my={8}
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

        <Flex>
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="#1D1C1C"
          >
            {brands.map((brand, index) => (
              <Box
                key={index}
                p={4}
                mx={2}
                color="#FFFFFF99"
                fontFamily="Travels"
                fontWeight="700"
                fontSize={{ base: "16px", md: "19px", lg: "32px" }}
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
