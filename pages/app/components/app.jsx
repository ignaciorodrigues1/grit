import React, { useState, useEffect } from "react";
import { Box, Image, Center, Flex } from "@chakra-ui/react";

const images = [
  "/images/app/Home.png",
  "/images/app/Login.png",
  "/images/app/Carrito.png",
];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box bgColor="#1D1C1C">
      <Box maxW="1280px" mx="auto" position="relative">
        <Box
          position="absolute"
          inset="0"
          backgroundImage="url('/images/app/bg.png')"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        />

        <Center pt="10" pb="28">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              transform={
                index === currentImageIndex ? "scale(1.1)" : "scale(1)"
              }
              transition="transform 0.3s ease"
              h="auto"
              maxW="calc(33.33% - 20px)"
              mr={index === 0 ? "-6%" : index === 2 ? "-7%" : undefined}
              mb="-10%"
              ml={index === 2 ? "-7%" : undefined}
              
            />
          ))}
        </Center>
      </Box>
    </Box>
  );
};

export default App;
