import { Box, Flex, Image, Link } from "@chakra-ui/react";

import MobileNavbar from "./mobileNavbar";

const Navbar = () => {
  return (
    <>
    {/* Desktop navbar */}

    <Box maxW="1280px" mx="auto" position='relative' display={{base: "none", md:"block"}} >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        paddingX={{base: "2rem", md: "3rem", xl: "0"}}
        paddingY="2rem"
        bg="transparent"
        position="absolute"
        width="100%"
        top="0"
        zIndex="999"
      >
        {/* Brand Image */}
        <Link href="/">
          <Image src="/images/brand.png" alt="Brand Logo" boxSize="85px" />
        </Link>

        {/* Blurred Section for Sections and Button */}
        <Flex
          backgroundColor="#3C463B4D"
          backdropFilter="blur(20px)"
          paddingY="8px"
          paddingX="16px"
          borderRadius="8px"
          align="center"
        >
          {/* Sections */}
          <Box
            marginRight="4"
            textColor="white"
            fontFamily="Ubuntu Mono"
            fontSize="16px"
          >
            <Link href="#" _hover={{ textDecoration: "none" }}>
              Proyectos
            </Link>
          </Box>
          <Box
            marginRight="4"
            textColor="white"
            fontFamily="Ubuntu Mono"
            fontSize="16px"
          >
            <Link href="#" _hover={{ textDecoration: "none" }}>
              La Empresa
            </Link>
          </Box>
          <Box
            marginRight="4"
            textColor="white"
            fontFamily="Ubuntu Mono"
            fontSize="16px"
          >
            <Link href="#" _hover={{ textDecoration: "none" }}>
              Aplicación
            </Link>
          </Box>

          {/* Login Link */}
          <Link
            href="#"
            bg="white"
            textColor="#3C463B"
            _hover="none"
            ml="9"
            py="8px"
            px="24px"
            fontSize="14px"
            fontWeight="700"
            borderRadius="4px"
            fontFamily="Travels"
          >
            INGRESAR
          </Link>
        </Flex>
      </Flex>
    </Box>

    {/* Mobile navbar */}

    <Box display={{ base: "block", md: "none" }}>
      <MobileNavbar />
    </Box>


    </>
  );
};

export default Navbar;
