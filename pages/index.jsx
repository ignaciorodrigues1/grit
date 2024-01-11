"use client"

import { Box } from "@chakra-ui/react";

const HomePage = () => {
  const backgroundImage = '/images/heroDesktop.png'; // Adjust the path as needed

  const boxStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // 100% of the viewport height
    width: '100%', // 100% of the viewport width
  };

  return (
    <Box style={boxStyle}>
      {/* Content of your page goes here */}
    </Box>
  );
};

export default HomePage;
