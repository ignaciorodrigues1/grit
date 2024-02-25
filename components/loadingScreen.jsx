import { Box, keyframes, Spinner } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const MotionBox = motion(Box);

const icons = [
  "/images/icono1.png",
  "/images/icono2.png",
  "/images/icono3.png",
  "/images/icono4.png",
];

function LoadingScreen() {
  const [visibleIcon, setVisibleIcon] = useState({
    src: null,
    direction: { x: 0, y: 0 },
  });
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    // Verifica si la página ha sido visitada antes
    if (!localStorage.getItem("pageVisited")) {
      setShowLoadingScreen(true);
      localStorage.setItem("pageVisited", "true");

      const timeout = setTimeout(() => {
        setShowLoadingScreen(false);
      }, 5000); // Ajusta este tiempo al total deseado para la pantalla de carga

      return () => clearTimeout(timeout);
    }
  }, []);

  const getRandomDirection = () => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 150;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    return { x, y };
  };

  if (!showLoadingScreen) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg="#1D1C1C"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      zIndex="9999"
    >
      <MotionBox
        as="img"
        src="/images/brand.png"
        animation={`${pulseAnimation} 3s infinite`}
        zIndex="2"
        width="100px"
        marginBottom="4"
      />
      <Spinner size="md" color="white" />
    </Box>
  );
}

export default LoadingScreen;

