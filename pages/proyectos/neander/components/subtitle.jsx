import { Box, Text, Flex } from "@chakra-ui/react";

const Subtitle = () => {
  return (
    <Flex align="center">
      <Flex maxW="1280px" mx="auto" w="95%">
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
            <span style={{ color: "#4139C6" }}>LA VIDA SE CONSTRUYE</span>{" "}
            <span style={{ color: "#A29CE2" }}>EN VILLA AMELIA</span>
          </Text>

          <Text
            fontSize={{base: "14px", md: "16px"}}
            lineHeight={{base: "16px", md: "16px"}}
            fontFamily="Ubuntu Mono"
            align="right"
            w={{ base: "70%", md: "60%" }}
          >
            A pocos minutos de Rosario, sobre la Ruta Provincial 18 en el Km 12
            hay una nueva opción para vivir o invertir.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Subtitle;
