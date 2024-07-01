import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

const Info = () => {
  return (
    <Box backgroundColor="#5E724C" maxW="100vw">
      <Box maxW="1280px" mx="auto" position="relative">
        {/* Heading */}
        <Flex
          align="center"
          justify="center"
          gap={20}
          py={10}
          paddingX={{ base: "1rem", md: "3rem", xl: "0" }}
        >
          <Image
            src="/images/brand.png"
            alt="Company Logo"
            boxSize="150px"
            display={{ base: "none", md: "block" }}
          />
          <Text
            color="#EBEBEB"
            fontFamily="Travels"
            fontSize={{ base: "24px", md: "32px" }}
            lineHeight={{ base: "26px", md: "32px" }}
            textTransform="uppercase"
          >
            desarrollos urbanísticos que se integran la sociedad y el ecosistema
            natural
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Info;
