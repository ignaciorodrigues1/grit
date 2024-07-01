"use client";

import {
  Flex,
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

import { FaBars, FaTimes } from "react-icons/fa";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleIcon = () => {
    return isOpen ? <FaTimes /> : <FaBars />;
  };

  return (
    <Flex maxW="1280px" mx="auto" position="relative">
      <Flex as="nav" width="100%" zIndex="999">
        <IconButton
          backgroundColor="#3C463B4D"
          backdropFilter="blur(20px)"
          color="white"
          background="transparent"
          fontSize="25px"
          _hover={{ textDecoration: "none" }}
          onClick={isOpen ? onClose : onOpen}
          icon={toggleIcon()}
          css={{
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />

        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay>
            <DrawerContent
              backgroundColor="#3C463B4D"
              backdropFilter="blur(20px)"
              color="white"
            >
              
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
                      href="/app"
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
