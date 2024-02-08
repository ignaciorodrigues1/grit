"use client"

import { Box } from "@chakra-ui/react";
import Hero from "../components/hero";
import TrustUs from "../components/trustUs";
import AppDownload from "../components/appDownload";
import NewsSlider from "../components/newsSlider";
import WavyGrid from "../components/wavyGrid";

const HomePage = () => {

  return (
    <Box>
      <Hero />
      <WavyGrid />
      <TrustUs />
      <AppDownload />
      <NewsSlider />
    </Box>
  );
};

export default HomePage;
