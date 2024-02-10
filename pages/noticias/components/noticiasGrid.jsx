import { Box, Image, Text, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

const NoticiasGrid = () => {
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get(process.env.API_PUBLIC_URL); // Consulta a la API
        setNoticias(response.data.elements);
        setIsLoading(false);
      } catch (error) {
        setError("Estamos actualizando nuestras novedades, inténtalo más tarde");
        setIsLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga mientras se realiza la solicitud a la API
  }

  if (error) {
    return <div>{error}</div>; // Mostrar mensaje de error si ocurre algún problema en la solicitud
  }

  if (noticias.length === 0) {
    return <div>No hay noticias recientes</div>; // Mostrar mensaje si no hay noticias disponibles
  }

  return (
    <Box bgColor="#1D1C1C">
      <Box maxW="1280px" mx="auto" display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="20px">
        {noticias.map((noticia) => (
          <Link key={noticia.id} to={`/noticias/${noticia.id}`}>
            <Box px="1rem">
              <Image
                src={noticia.imagen}
                alt={`Imagen de la noticia ${noticia.id}`}
                boxSize="100%"
              />
              <Text
                color="white"
                textAlign="center"
                mt={2}
                fontFamily="Travels"
                fontSize="16px"
                textTransform="uppercase"
                fontWeight="700"
              >
                {noticia.titulo}
              </Text>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default NoticiasGrid;