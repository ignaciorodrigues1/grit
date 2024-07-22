import { Box, Text, Flex } from "@chakra-ui/react";
import FadeInFrom from "../../../../components/animations/fadeInFrom";

const Subtitle = () => {
  return (
    <Flex align="center">
      <Flex maxW="1280px" mx="auto" w="95%">
        <FadeInFrom id="subtitle" direction="right">
          <Flex
            flexDirection="column"
            alignItems="flex-end"
            h="100%"
            pt="22%"
            pb={{ base: "5%", md: "15%", lg: "18%" }}
            align="right"
          >
            <Text
              fontSize={{ base: "32px", md: "42px", lg: "72px" }}
              fontWeight="900"
              lineHeight={{ base: "32px", md: "42px", lg: "62px" }}
              fontFamily="Archivo"
              textTransform="uppercase"
              align="right"
              w={{ base: "100%", md: "80%" }}
            >
              <span style={{ color: "#4139C6" }}>LA VIDA SE CONSTRUYE</span>{" "}
              <span style={{ color: "#A29CE2" }}>EN VILLA AMELIA</span>
            </Text>

            <Text
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "16px", md: "16px" }}
              fontFamily="Archivo"
              align="right"
              w={{ base: "70%", md: "60%" }}
              mt="4"
            >
              A pocos minutos de Rosario, sobre la Ruta Provincial 18 en el Km
              12 hay una nueva opción para vivir o invertir.
            </Text>
          </Flex>
        </FadeInFrom>
      </Flex>
    </Flex>
  );
};

export default Subtitle;
