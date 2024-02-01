import { Box } from "@chakra-ui/react";

import Hero from "./components/hero";
import Subtitle from "./components/subtitle";
import Info from "./components/info";
import AppDownload from "../../../components/appDownload";

const NeanderPage = () => {

  return (
    <Box>
      <Hero />
      <Subtitle />
      <Info />
      <AppDownload />
    </Box>
  );
};

export default NeanderPage;
