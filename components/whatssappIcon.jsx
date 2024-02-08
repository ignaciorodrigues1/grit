import { FaWhatsapp } from "react-icons/fa";
import { Link } from "@chakra-ui/next-js";

const WhatsappIcon = () => {
  // Estilos para el ícono de WhatsApp
  const iconStyle = {
    position: "fixed",
    bottom: "75px",
    right: "20px",
    fontSize: "3rem",
    color: "white",
    cursor: "pointer",
    zIndex: "9999",
    padding: "10px", // Agrega un padding alrededor del ícono
    borderRadius: "50%", // Hace que el ícono tenga forma de círculo
    background: "#25D366", // Fondo de color verde de WhatsApp
  };

  // Enlace de WhatsApp (puedes cambiar el número según tu necesidad)
  const whatsappLink = "https://wa.me/1234567890";

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp style={iconStyle} />
    </Link>
  );
};

export default WhatsappIcon;
