import { useEffect, useState } from "react";
import { Box, Image, Link, Flex} from "@chakra-ui/react";
import { AnimatedNavbar } from "./animations/animatedNavbar";

import MobileNavbar from "./mobileNavbar";
import DesktopNavbar from "./desktopNavbar";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsNavVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Box
      className="NAVBAR"
      w="100%"
      h="auto"
      position="fixed"
      zIndex={99999}
      maxW="1280px"
      top="0"
      left="0"
      right="0"
      mx="auto"
    >
      <Flex justify="space-between" py="3rem" px="5rem" align="center">
        <Link
          href="/"
          transition="transform 0.3s ease-in-out"
          transform={isNavVisible ? "translateY(0)" : "translateY(-300%)"}
        >
          <Image src="/images/brand.png" alt="Brand Logo" boxSize="85px" />
        </Link>

        <AnimatedNavbar>
          {/* Mobile navbar */}

          <Box display={{ base: "block", md: "none" }}>
            <MobileNavbar />
          </Box>

          {/* Desktop navbar */}

          <Box display={{ base: "none", md: "block" }}>
            <DesktopNavbar />
          </Box>
        </AnimatedNavbar>
      </Flex>
    </Box>
  );
};

export default Navbar;
