import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

const PhotoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <Box key={index} className="slide">
          <Image src={`/images/neander/image${index}.png`} alt={`Image ${index}`} className="slider3dImage"/>
        </Box>
      ))}
    </Slider>
  );
};

export default PhotoSlider;
