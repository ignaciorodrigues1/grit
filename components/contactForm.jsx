import {
  Box,
  Heading,
  Flex,
  Input,
  Textarea,
  Button,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { ImageWithMotion } from "./animations/imageWithMotion";
import { ImageWithMotionMobile } from "./animations/imageWithMotionMobile";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Configurar Nodemailer
    console.log(data);
  };

  return (
    <Flex
      position="relative"
      backgroundImage="url('/images/contactBg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      py="20"
      alignItems="center"
      justifyContent="center"
      zIndex="-1"
    >
      {/* Contact Vector Image */}

      <ImageWithMotion />
      <ImageWithMotionMobile />

      <Box
        position="relative"
        backgroundColor="#3C463B4D"
        backdropFilter="blur(5px)"
        p={8}
        borderRadius="lg"
        w="600px"
        maxW="90%"
        mx="auto"
        pt={8}
        alignItems="center"
        zIndex="5"
      >
        {/* Company Logo */}
        <Flex justify="center" mb={4}>
          <Image src="/images/brand.png" alt="Grit Logo" maxH="75px" />
        </Flex>

        {/* Form Title */}
        <Heading
          textAlign="center"
          mb={4}
          fontSize={{ base: "21px", sm: "32px" }}
          fontFamily="Travels"
          fontWeight="900"
          color="white"
        >
          CONTACTANOS
        </Heading>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name and Company */}
          <Flex mb={4}>
            <Input
              {...register("name", { required: "Campo requerido" })}
              placeholder="Nombre"
              mr={2}
              color="white"
              _placeholder={{ color: "white" }}
              borderRadius="4px"
              border="1px solid rgba(255, 255, 255, 0.80)"
              background="rgba(255, 255, 255, 0.10)"
            />
            <Input
              {...register("company")}
              placeholder="Empresa"
              color="white"
              _placeholder={{ color: "white" }}
              borderRadius="4px"
              border="1px solid rgba(255, 255, 255, 0.80)"
              background="rgba(255, 255, 255, 0.10)"
            />
          </Flex>

          {/* Email */}
          <Input
            {...register("email", {
              required: "Campo requerido",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Correo electrónico no válido",
              },
            })}
            placeholder="Correo Electrónico"
            mb={4}
            color="white"
            _placeholder={{ color: "white" }}
            borderRadius="4px"
            border="1px solid rgba(255, 255, 255, 0.80)"
            background="rgba(255, 255, 255, 0.10)"
          />

          {/* Message */}
          <Textarea
            {...register("message", { required: "Campo requerido" })}
            placeholder="Mensaje"
            mb={4}
            color="white"
            _placeholder={{ color: "white" }}
            borderRadius="4px"
            border="1px solid rgba(255, 255, 255, 0.80)"
            background="rgba(255, 255, 255, 0.10)"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            textAlign="center"
            colorScheme="green"
            w="100%"
            textTransform="uppercase"
            fontFamily="Travels"
            bgColor="#EC6E44"
            h="36px"
            _hover={{ bgColor: "#9EAC8E" }}
          >
            Enviar consulta
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactForm;
