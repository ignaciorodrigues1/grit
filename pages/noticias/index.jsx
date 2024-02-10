import { Box } from "@chakra-ui/react"
import Hero from "./components/hero"
import NoticiasGrid from "./components/noticiasGrid"

const Noticias = () => {
  return (
    <Box>
      <Hero />
      <NoticiasGrid />
    </Box>
  )
}

export default Noticias