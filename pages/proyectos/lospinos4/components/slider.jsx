import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Image,
  useMediaQuery,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const PhotoSlider = () => {
  const [isSm, isMdOrLarger] = useMediaQuery([
    "(min-width: 40em)",
    "(min-width: 48em)",
  ]);

  const PrevArrow = (props) => (
    <Button
      position="absolute"
      top="42%"
      left={{ md: "-4vw" }}
      my="auto"
      color="black"
      boxSize="40px"
      borderRadius="full"
      onClick={props.onClick}
      bg="#D6D6D6"
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
      top="42%"
      right={{ md: "-4vw" }}
      my="auto"
      color="black"
      boxSize="40px"
      borderRadius="full"
      onClick={props.onClick}
      bg="#D6D6D6"
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
    <Box py={10} overflowX="hidden">
      <Box
        maxW="1280px"
        mx={{ base: "0", md: "auto" }}
        paddingX={{ md: "4rem", xl: "5rem" }}
      >
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Box key={index} className="slide">
              <Image
                src={`/images/neander/image${index}.png`}
                alt={`Image ${index}`}
                className="slider3dImage"
                borderRadius="1%"
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default PhotoSlider;
