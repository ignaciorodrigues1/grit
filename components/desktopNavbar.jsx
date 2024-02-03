import { Box, Flex, Link } from "@chakra-ui/react";

const DesktopNavbar = () => {
  return (
    <Box as="nav">
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
          <Link href="/proyectos" _hover={{ textDecoration: "none" }}>
            Proyectos
          </Link>
        </Box>
        <Box
          marginRight="4"
          textColor="white"
          fontFamily="Ubuntu Mono"
          fontSize="16px"
        >
          <Link href="/empresa" _hover={{ textDecoration: "none" }}>
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
    </Box>
  );
};

export default DesktopNavbar;
