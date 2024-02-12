"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Link,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const NewsSlider = () => {
  const [isSm, isMdOrLarger] = useMediaQuery([
    "(min-width: 40em)",
    "(min-width: 48em)",
  ]);

  const slides = [
    {
      image: "/images/slide1.png",
      subtitle: "Arquitectura abstracta en tendencia mundial",
      link: "/#",
    },
    {
      image: "/images/slide2.png",
      subtitle: "El arquitecto que construye castillos",
      link: "/#",
    },
    {
      image: "/images/slide3.png",
      subtitle: "Los barrios como oficinas abiertas al mundo",
      link: "/#",
    },
    {
      image: "/images/slide1.png",
      subtitle: "Arquitectura abstracta en tendencia mundial",
      link: "/#",
    },
    {
      image: "/images/slide2.png",
      subtitle: "El arquitecto que construye castillos",
      link: "/#",
    },
    {
      image: "/images/slide3.png",
      subtitle: "Los barrios como oficinas abiertas al mundo",
      link: "/#",
    },
  ];

  const PrevArrow = (props) => (
    <Button
      position="absolute"
      top="30%"
      left={{ md: "-4vw" }}
      my="auto"
      color="white"
      boxSize="40px"
      borderRadius="full"
      onClick={props.onClick}
      bg="#EBEBEB1A"
      _hover={{ backgroundColor: "#3C463B4D" }}
      display={{ base: "none", md: "block" }}
    >
      <Flex>
        <FaChevronLeft />
      </Flex>
    </Button>
  );

  const NextArrow = (props) => (
    <Button
      position="absolute"
      top="30%"
      right={{ md: "-4vw" }}
      my="auto"
      color="white"
      boxSize="40px"
      borderRadius="full"
      onClick={props.onClick}
      bg="#EBEBEB1A"
      _hover={{ backgroundColor: "#3C463B4D" }}
      display={{ base: "none", md: "block" }}
    >
      <Flex>
        <FaChevronRight />
      </Flex>
    </Button>
  );

  let slidesToShow = 1;
  if (isSm) {
    slidesToShow = 2;
  } else if (isSm) {
    slidesToShow = 3;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: isMdOrLarger ? false : true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box backgroundColor="#1D1C1C" py={10} overflowX="hidden">
      <Heading
        textAlign="center"
        color="white"
        mb={8}
        fontFamily="Travels"
        fontSize="32px"
      >
        NOVEDADES
      </Heading>
      <Box
        maxW="1280px"
        mx={{ base: "0", md: "auto" }}
        paddingX={{ md: "4rem", xl: "5rem" }}
      >
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Link key={index} to={slide.link}>
              <Box px="1rem">
                <Image
                  src={slide.image}
                  alt={`News ${index + 1}`}
                  boxSize="100%"
                />
                <Text
                  color="white"
                  textAlign="center"
                  mt={2}
                  fontFamily="Travels"
                  fontSize="16px"
                  textTransform="uppercase"
                  fontWeight="700"
                >
                  {slide.subtitle}
                </Text>
              </Box>
            </Link>
          ))}
        </Slider>
      </Box>
      <Flex justifyContent="center">
        <Link href="/noticias">
          <Button
            mt="5"
            type="link"
            textAlign="center"
            color="white"
            textTransform="uppercase"
            fontFamily="Travels"
            bgColor="#EC6E44"
            h="36px"
            _hover={{ bgColor: "#9EAC8E" }}
          >
            Ver Noticias
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default NewsSlider;
