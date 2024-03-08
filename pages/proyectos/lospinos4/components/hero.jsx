"use client";

import { useState } from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import PanoramicImage from "../../components/panoramicImage";
import { AnimatedIcon } from "../../../../components/animations/animatedIcon";
import { PiCube } from "react-icons/pi";
import FadeInFrom from "../../../../components/animations/fadeInFrom";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    console.log("Image clicked");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box minHh="100vh" bgColor="#1A6626" position="relative" zIndex={0}>
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear-gradient(180deg, #1A6626 54.06%, rgba(64, 56, 197, 0) 108.64%)"
        zIndex={2}
      />

      <Box position="absolute" inset="0" zIndex={1}>

        <Box
          position="absolute"
          inset="0"
          backgroundImage="url('/images/bgPattern.png')"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex={-1}
        />

        <Box
          position="absolute"
          inset="0"
          bgColor="rgba(26, 102, 38, 0.9)"
          zIndex={0}
        />

      </Box>

      <Flex
        maxW="1280px"
        w="95%"
        textAlign="center"
        color="white"
        flexDirection="column"
        mx="auto"
        left="0"
        right="0"
        zIndex={3}
        position="relative"
        pt="40"
      >
        <FadeInFrom id="heading-image" direction="scale">
          <Flex
            flexDir="column"
            justifyContent="flex-end"
            pt="5%"
            pb={{ md: "5%" }}
          >
            <Text
              fontSize={{ base: "35px", sm: "6vw", md: "55px", lg: "72px" }}
              lineHeight={{ base: "35px", sm: "6vw", md: "55px", lg: "67px" }}
              fontWeight="900"
              fontFamily="Travels"
              textTransform="uppercase"
              align="center"
              color="white"
              pb="5"
            >
              Los pinos 4
            </Text>
          </Flex>
        </FadeInFrom>

        <Text
          fontSize="32px"
          fontWeight="bold"
          my={10}
          fontFamily="Travels"
          textTransform="uppercase"
          color="white"
        >
          <span style={{ color: "#43D259" }}>Respirá,</span> Tenés Opciones
        </Text>

        {/* Arrow Icon */}
        <Flex justify="center" my={10}>
          <AnimatedIcon>
            <Image
              src="/images/arrowDown.png"
              alt="Arrow Icon"
              maxH="50px"
              w="auto"
            />
          </AnimatedIcon>
        </Flex>

        {/* Additional Image */}
        <Box maxH="700px" mx="auto" position="relative">
          <FadeInFrom id="heading-image" direction="bottom">
            <Image
              src="/images/neanderPreview.png"
              alt="Additional Image"
              maxH="100%"
              maxW="100%"
              objectFit="cover"
              mb="-20%"
            />
          </FadeInFrom>

          {/* Cube Icon and Text */}
          <Box
            position="absolute"
            bottom="20px"
            right="20px"
            bgColor="#FFFFFF4D"
            padding="2px"
            borderRadius="8px"
            cursor="pointer"
            onClick={handleImageClick}
            display="flex"
            alignItems="center"
            mb="-20%"
          >
            {/* Cube Icon */}
            <PiCube fontSize="35px" />

            {/* Text */}
            <Text fontSize="25px" color="white" fontFamily="Travels" pl="1">
              360°
            </Text>
          </Box>
        </Box>
      </Flex>

      {/* 360° Photo Sphere Modal */}
      <PanoramicImage
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl="/images/neander360.jpg"
      />
    </Box>
  );
};

export default Hero;
