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
    <Box minHh="100vh" bgColor="#4038C5" position="relative" zIndex={0}>
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear-gradient(180deg, #4038C5 54.06%, rgba(64, 56, 197, 0) 108.64%)"
        zIndex={2}
      />

      <Box
        position="absolute"
        inset="0"
        backgroundImage="url('/images/bgPatternNeander.png')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex={1}
        bgColor="#4038C5"
      />

      {/* Centered Content */}
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
        {/* Heading Image */}
        <FadeInFrom id="heading-image" direction="scale">
        <Image
          src="/images/neanderTittle.png"
          alt="Neander Title"
          maxH="130px"
          mx="auto"
          my={4}
        />
        </FadeInFrom>
        {/* Subtitle */}
        <Text
          fontSize="32px"
          fontWeight="bold"
          my={10}
          fontFamily="Archivo"
          textTransform="uppercase"
        >
          <span style={{ color: "#A29CE2" }}>Volvé a tu</span> esencia
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

          {/* Cube Icon and Text
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
          > */}
            {/* Cube Icon
            <PiCube fontSize="35px" /> */}

            {/* Text
            <Text fontSize="25px" color="white" fontFamily="Archivo" pl="1">
              360°
            </Text>
          </Box> */}
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
