import { Flex, Box, Image, Container, Link } from "@chakra-ui/react";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Flex as="footer" bg="#1D1C1C" color="white" h="62px" w="100%" alignItems="center">
      <Container maxW="1280px" mx="auto">
        <Flex
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          {/* Text and Copyright */}
          <Box>
            <p>© Copyright 2023 - Grit Desarrollos</p>
          </Box>

          {/* Social Icons */}
          <Flex align="center" gap={4}>
            <Link href="https://www.youtube.com/" isExternal>
              <FaYoutube size="1.5em" color="white" />
            </Link>
            <Link href="https://twitter.com/" isExternal>
              <FaXTwitter size="1.5em" color="white" />
            </Link>
            <Link href="https://www.instagram.com/" isExternal>
              <FaInstagram size="1.5em" color="white" />
            </Link>
            <Link href="https://www.facebook.com/" isExternal>
              <FaLinkedinIn size="1.5em" color="white" />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Footer;

