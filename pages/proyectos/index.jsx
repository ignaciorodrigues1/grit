"use client"

import { Box } from "@chakra-ui/react";
import WavyGridProyects from "../../components/wavyGridProyects";
import TrustUs from "../../components/trustUs";
import ContactForm from "../../components/contactForm";

const ProyectosPage = () => {

  return (
    <Box>
      <WavyGridProyects />
      <TrustUs />
    </Box>
  );
};

export default ProyectosPage;
