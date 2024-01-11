"use client";

import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Link,
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex position="fixed" top="2rem" mx="auto" px='2rem' w="100%" alignItems="center" justifyContent="space-between">
      <Box>
        <Image src="/images/brand.png" alt="Brand Logo" boxSize="85px" />
      </Box>

      <Flex>
        <IconButton
          backgroundColor="#3C463B4D"
          backdropFilter="blur(20px)"
          color="white"
          background="transparent"
          fontSize="25px"
          _hover={{ textDecoration: "none" }}
          onClick={isOpen ? onClose : onOpen}
          icon={<FaBars />}
        />

        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay>
            <DrawerContent
              backgroundColor="#3C463B4D"
              backdropFilter="blur(20px)"
              color="white"
            >
              <DrawerCloseButton
                color="white"
                zIndex="2"
                position="absolute"
                right="2rem"
                top="2rem"
                fontSize="25px"
              />
              <DrawerBody>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <VStack spacing={4} alignItems="center">
                    <Link
                      fontSize="32px"
                      fontFamily="Travels"
                      fontWeight="900"
                      _hover={{ textDecoration: "none" }}
                      href="/"
                    >
                      HOME
                    </Link>
                    <Link
                      fontSize="32px"
                      fontFamily="Travels"
                      fontWeight="900"
                      _hover={{ textDecoration: "none" }}
                      href="/proyectos"
                    >
                      PROYECTOS
                    </Link>
                    <Link
                      fontSize="32px"
                      fontFamily="Travels"
                      fontWeight="900"
                      _hover={{ textDecoration: "none" }}
                      href="/empresa"
                    >
                      LA EMPRESA
                    </Link>
                    <Link
                      fontSize="32px"
                      fontFamily="Travels"
                      fontWeight="900"
                      _hover={{ textDecoration: "none" }}
                      href="/aplicacion"
                    >
                      APLICACIÓN
                    </Link>
                  </VStack>

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
                    mx="auto"
                    mt="7"
                  >
                    INGRESAR
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default MobileNavbar;
