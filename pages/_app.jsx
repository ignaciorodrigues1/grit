import { ChakraProvider } from '@chakra-ui/react'

import RootLayout from '../layouts/layout'
import Fonts from 'public/fonts/Fonts.js';


import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider >
      <RootLayout>
        <Fonts />
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  )
}

export default MyApp