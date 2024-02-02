import { Box, Flex, Text } from "@chakra-ui/react";
import PhotoSlider from "./slider";

const Images = () => {
  return (
    <Box
      bgColor="white"
      mt="-20%"
      backgroundImage={`linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/images/bgPattern.png")`}
      backgroundSize="cover"
    >
      <Box background={`linear-gradient(to bottom, transparent 0%, white 35%)`}>
        <Box maxW="1280px" mx="auto">
          <Flex
            flexDir="column"
            justifyContent="flex-end"
            pt={{ base: "25%", md: "20%", lg: "18%", xl:"18vw" }}
            pb={{ md: "5%" }}
          >
            <Text
              fontSize="72px"
              fontWeight="900"
              lineHeight="62px"
              fontFamily="Travels"
              textTransform="uppercase"
              align="center"
              color="#4139C6"
              pb="5"
            >
              Neander Crece
            </Text>
            <Text
              pb="5"
              fontSize="32px"
              fontFamily="Travels"
              fontWeight="900"
              align="center"
              textTransform="uppercase"
              color="#A29CE2"
            >
              Y tu inversión también.
            </Text>
            <PhotoSlider />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Images;
