import { Box, Text, Flex } from "@chakra-ui/react";

const Subtitle = () => {
  return (
    <Flex minH="80vh" align="center">
      <Flex maxW="1280px" mx="auto">
        <Flex
          flexDirection="column"
          alignItems="flex-end"
          h="100%"
        >
          <Text
            fontSize="72px"
            fontWeight="900"
            lineHeight="62px"
            fontFamily="Travels"
            textTransform="uppercase"
            align="right"
          >
            <span style={{ color: "#4139C6" }}>LA VIDA SE CONSTRUYE</span>{" "}
            <span style={{ color: "#A29CE2" }}>EN VILLA AMELIA</span>
          </Text>

          <Text fontSize="24px" fontFamily="Ubuntu Mono" align="right">
            A pocos minutos de Rosario, sobre la Ruta Provincial 18 en el Km 12
            hay una nueva opción para vivir o invertir.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Subtitle;
