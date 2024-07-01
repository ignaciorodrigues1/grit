import React from 'react';
import { motion } from 'framer-motion';

const ImageWithZoom = ({ src, alt, isZoomIn }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        maxWidth: '100vw',
        objectFit: 'cover',
        scale: isZoomIn ? 1.1 : 0.9,
        transition: { duration: 3 } 
      }}
    />
  );
};

export default ImageWithZoom;