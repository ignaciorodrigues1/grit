import { Box } from "@chakra-ui/react";

import Hero from "./components/hero";
import WavyGrid2 from "./components/wavyGrid2";
import Info from "./components/info";
import App from "../app/components/app";


const NeanderPage = () => {

  return (
    <Box>
      <Hero />
      <WavyGrid2 />
      <Info />
      <App />
    </Box>
  );
};

export default NeanderPage;
