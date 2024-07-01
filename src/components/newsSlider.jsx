"use client";

import { useState, useEffect } from 'react';
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


async function getNews() {
  const res = await fetch('https://api-grit-dev.tercerpiso.tech/api/news/web');

  return res.json();
}

const NewsSlider = () => {
  const [isSm, isMdOrLarger] = useMediaQuery([
    "(min-width: 40em)",
    "(min-width: 48em)",
  ]);
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await getNews();
        console.log(results);
        setSlides(results.elements);
        setIsLoading(false);
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

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
                  src={slide.imgCard}
                  alt={`News ${index + 1}`}
                  width={'100%'}
                  height={'250px'}
                  objectFit={'cover'}
                  objectPosition={'center'}
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
                  {slide.title}
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
