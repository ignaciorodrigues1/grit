import { useState, useRef, useEffect } from "react";
import { Box, Image, Text, Flex, Spinner } from "@chakra-ui/react";
import { AnimatedIcon } from "../../../../components/animations/animatedIcon";
import FadeInFrom from "../../../../components/animations/fadeInFrom";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }
  }, []);

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

        <Box maxH="700px" mx="auto" position="relative">
          {!isVideoLoaded && (
            <Box position="relative" maxH="100%" maxW="100%">
              <FadeInFrom id="heading-image" direction="bottom">
                <Image
                  src="/images/losPinos/losPinosHero.png"
                  alt="Los Pinos Hero"
                  maxH="100%"
                  maxW="100%"
                  objectFit="cover"
                  mb="-20%"
                />
              </FadeInFrom>
              <Spinner
                size="xl"
                position="absolute"
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
                color="white"
              />
            </Box>
          )}
          <Box
            as="video"
            ref={videoRef}
            onLoadedData={handleVideoLoad}
            autoPlay
            muted
            loop
            preload="auto"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              marginBottom: "-20%",
              display: isVideoLoaded ? "block" : "none",
            }}
          >
            <source src="/images/losPinos/lospinosVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
