import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";

export const AnimatedNavbar = ({ children }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsNavVisible(
        currentScrollPos < prevScrollPos || currentScrollPos < 50
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
      transition="transform 0.3s ease-in-out"
      transform={isNavVisible ? "translateY(0)" : "translateY(-300%)"}
    >
      {children}
    </Box>
  );
};
