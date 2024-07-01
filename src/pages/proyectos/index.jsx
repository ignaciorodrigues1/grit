
import { Box } from "@chakra-ui/react";
import Neander from "./components/neander";
import TrustUs from "../../components/trustUs";
import LosPinos from "./components/losPinos";

const ProyectosPage = () => {

  return (
    <Box>
      <Neander />
      <LosPinos />
      <TrustUs />
    </Box>
  );
};

export default ProyectosPage;
