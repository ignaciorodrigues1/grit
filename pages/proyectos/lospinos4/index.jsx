import { Box } from "@chakra-ui/react";

import Hero from "./components/hero";
import Subtitle from "./components/subtitle";
import Info from "./components/info";
import AppDownload from "../../../components/appDownload";
import Images from "./components/images";
import NextProyect from "./components/nextProyext";

const LosPinosPage = () => {

  return (
    <Box>
      <Hero />
      <Subtitle />
      <Info />
      <Images />
      <AppDownload />
      <NextProyect />
    </Box>
  );
};

export default LosPinosPage;
