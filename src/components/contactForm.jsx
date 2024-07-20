'use client';
import {
  Box,
  Heading,
  Flex,
  Input,
  Textarea,
  Button,
  Image,
} from "@chakra-ui/react";
import { useRef, useState, useTransition } from "react";
import { ImageWithMotion } from "./animations/imageWithMotion";
import { ImageWithMotionMobile } from "./animations/imageWithMotionMobile";
import toast from "react-hot-toast";

const ContactForm = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

 
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const emailSubject = `Contacto de ${name}`;
    const emailText = `Nombre: ${name}
                       Correo electrónico: ${email}
                       Empresa: ${company}
                       Mensaje: ${message}`;

    const formDataToSend = {
      to: "contacto@gritdesarrollos.com",
      subject: emailSubject,
      text: emailText,
      telephone: "",
      service: "",
      startDate: "",
      endDate: "",
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });
  
      if (response.ok) {
        toast.success('Email enviado');
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error('Error al enviar Email');
      }
    } catch (error) {
      toast.error('Error al enviar Email');
    } finally {
      setIsLoading(false);
    }
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
      zIndex="0"
    >
      {/* ImageWithMotion Container */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        justifyContent="center"
        alignItems="center"
        zIndex="0"
      >
        <ImageWithMotion />
        <ImageWithMotionMobile />
      </Box>

      {/* Form Container */}
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
          fontFamily="Archivo"
          fontWeight="600"
          color="white"
        >
          CONTACTANOS
        </Heading>

        {/* Form */}
        <form onSubmit={sendEmail}>
          {/* Name and Company */}
          <Flex gap={'16px'} direction={{base: "column", md: "row"}}>
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              mr={2}
              fontFamily="Archivo"
              color="white"
              _placeholder={{ color: "white" }}
              borderRadius="4px"
              border="1px solid rgba(255, 255, 255, 0.80)"
              background="rgba(255, 255, 255, 0.10)"
              mb={{base: "4", md: ""}}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isPending}
            />
            <Input
              type="text"
              name="company"
              placeholder="Empresa"
              color="white"
              fontFamily="Archivo"
              _placeholder={{ color: "white" }}
              borderRadius="4px"
              border="1px solid rgba(255, 255, 255, 0.80)"
              background="rgba(255, 255, 255, 0.10)"
              onChange={(e) => setCompany(e.target.value)}
              required
              disabled={isLoading}
            />
          </Flex>

          {/* Email */}
          <Input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            mb={4}
            color="white"
            _placeholder={{ color: "white" }}
            borderRadius="4px"
            border="1px solid rgba(255, 255, 255, 0.80)"
            background="rgba(255, 255, 255, 0.10)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isPending}
          />

          {/* Message */}
          <Textarea
            name="message"
            placeholder="Mensaje"
            mb={4}
            fontFamily="Archivo"
            color="white"
            _placeholder={{ color: "white" }}
            borderRadius="4px"
            border="1px solid rgba(255, 255, 255, 0.80)"
            background="rgba(255, 255, 255, 0.10)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={isPending}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            textAlign="center"
            colorScheme="green"
            w="100%"
            textTransform="uppercase"
            fontFamily="Archivo"
            bgColor="#EC6E44"
            h="36px"
            _hover={{ bgColor: "#9EAC8E" }}
            disabled={isPending}
          >
            Enviar consulta
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactForm;
