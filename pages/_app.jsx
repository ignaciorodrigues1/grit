import { ChakraProvider } from '@chakra-ui/react'

import RootLayout from '../layouts/layout'
import Fonts from '/public/fonts/fonts';
import theme from './theme';

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <Fonts />
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  )
}

export default MyApp