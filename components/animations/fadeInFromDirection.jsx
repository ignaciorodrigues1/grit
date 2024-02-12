import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInFrom = ({ direction, children }) => {
  const ref = useRef();
  const [inView, setInView] = useInView({
    triggerOnce: false,
    threshold: 0.25
  });

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      opacity: 1,
      x: direction === "right" ? 0 : direction === "left" ? -20 : 0,
      y: direction === "bottom" ? 0 : direction === "top" ? -20 : 0,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      style={{ originX: 0, originY: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFrom;