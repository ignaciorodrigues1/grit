import { motion } from "framer-motion";

const ImageAnimation = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }} // posición inicial fuera de la pantalla
      animate={{ y: 0, opacity: 1 }} // posición final y opacidad completa
      transition={{ delay: delay, duration: 2 }} // tiempo de retraso
    >
      {children}
    </motion.div>
  );
};

export default ImageAnimation;
