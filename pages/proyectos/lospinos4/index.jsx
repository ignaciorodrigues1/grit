import { Box } from "@chakra-ui/react";

import Hero from "./components/hero";
import Subtitle from "./components/subtitle";
import Info from "./components/info";
import AppDownload from "../../../components/appDownload";
import Images from "./components/images";

const NeanderPage = () => {

  return (
    <Box>
      <Hero />
      <Subtitle />
      <Info />
      <Images />
      <AppDownload />
    </Box>
  );
};

export default NeanderPage;
