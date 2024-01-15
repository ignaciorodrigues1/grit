"use client"

import { Box } from "@chakra-ui/react";
import Hero from "../components/hero";
import TrustUs from "../components/trustUs";
import AppDownload from "../components/appDownload";

const HomePage = () => {
 

  return (
    <Box>
      <Hero />
      <TrustUs />
      <AppDownload />
    </Box>
  );
};

export default HomePage;
