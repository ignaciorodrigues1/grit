"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Text, Heading, Link, Button } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const NewsSlider = () => {
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
      left={{base: "-7%", md: "-5%"}}
      my="auto"
      fontSize="24px"
      color="white"
      boxSize="40px"
      borderRadius="full"
      onClick={props.onClick}
      bg="#EBEBEB1A"
      _hover={{ backgroundColor:"#3C463B4D" }}
    >
      <FaChevronLeft />
    </Button>
  );
  
  const NextArrow = (props) => (
    <Button
      position="absolute"
      top="30%"
      right={{base: "-7%", md: "-5%"}}
      my="auto"
      fontSize="24px"
      color="white"
      boxSize="40px"
      borderRadius="full"
      onClick={props.onClick}
      bg="#EBEBEB1A"
      _hover={{ backgroundColor:"#3C463B4D" }}
    >
      <FaChevronRight />
    </Button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
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
        mx="auto"
        paddingX={{ base: "2rem", md: "3rem", xl: "0" }}
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
    </Box>
  );
};

export default NewsSlider;
