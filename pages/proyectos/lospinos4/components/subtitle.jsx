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
              fontFamily="Travels"
              textTransform="uppercase"
              align="right"
              w={{ base: "100%", md: "80%" }}
            >
              <span style={{ color: "#1B6727" }}>EL NUEVO</span>{" "}
              <span style={{ color: "#1B6727" }}>BARRIO DE</span>{" "}
              <span style={{ color: "#319B41" }}>ÁLVAREZ</span>
            </Text>

            <Text
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "16px", md: "16px" }}
              fontFamily="Ubuntu Mono"
              align="right"
              w={{ base: "70%", md: "60%" }}
              color="#00000099"
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
