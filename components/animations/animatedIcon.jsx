import { motion } from 'framer-motion';

export const AnimatedIcon = ({ children }) => {
  const transitionValues = {
    duration: 3,
    repeat: Infinity,
    repeatType: 'mirror',
  };

  return (
    <motion.div
      transition={transitionValues}
      animate={{
        y: ['-6px', '6px']
      }}
    >
      {children}
    </motion.div>
  );
};
