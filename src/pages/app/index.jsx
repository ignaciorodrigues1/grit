"use client";

import { Box } from "@chakra-ui/react";
import AppDownload from "../../components/appDownload";
import App from "./components/app";
import WavyGrid from "./components/wavyGrid";
import Message from "./components/message";
import App2 from "./components/app2";

const HomePage = () => {
  return (
    <Box>
      <AppDownload />
      <WavyGrid />
      <App />
      <Message />
      <App2 />
    </Box>
  );
};

export default HomePage;
