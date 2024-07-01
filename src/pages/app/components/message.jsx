import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";

const Message = () => {
  return (
    <Box backgroundColor="#1D1C1C" maxW="100vw" position="">
      <Box maxW="1280px" mx="auto" position="relative">

        <Flex
          align="center"
          justify="center"
          gap={20}
          py={10}
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
      </Box>
    </Box>
  );
};

export default Message;
