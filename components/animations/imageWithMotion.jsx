"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const images = [
  "/images/vectorBg1.png",
  "/images/vectorBg2.png",
  "/images/vectorBg3.png",
  "/images/vectorBg4.png",
];

const ImageWithMotion = ({ src, height, index }) => (
  <motion.div
    initial={{ scale: 1 }}
    animate={{
      scale: [1, 1.1, 1],
      transition: { duration: 3, repeat: Infinity, delay: index * 0.2 },
    }}
  >
    <Image src={src} h={height} />
  </motion.div>
);

export const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ajusta el delay entre cada animación (en milisegundos)

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <AnimatePresence>
      {images.map((src, index) => (
        <Flex
          key={index}
          position="absolute"
          w="100%"
          h="100%"
          zIndex={index === currentImageIndex ? "2" : "1"}
          justify="center"
        >
          <ImageWithMotion src={src} index={index} height={`${35 + index * 12}%`} />
        </Flex>
      ))}
    </AnimatePresence>
  );
};
