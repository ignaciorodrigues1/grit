import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";

const Message = () => {
  return (
    <Box backgroundColor="#1D1C1C" maxW="100vw" position="relativo" pt="6" pb="4">
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
          <Box>
            <Text 
              color="#EBEBEB"
              fontFamily="Archivo"
              fontWeight="700"
              fontSize={{ base: "24px", md: "48px" }}
              lineHeight={{ base: "26px", md: "48px" }}
            >Descubrí todas las posibilidades que Grit tiene para ofrecerte</Text>
            <Text color="#EBEBEB" mt="4" fontFamily="Archivo" fontSize="base">Con nuestra nueva app, no solo gestionas tus inversiones de manera eficiente, sino que también te integras más profundamente en la comunidad Grit, compartiendo y creciendo junto a otros miembros.</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Message;
