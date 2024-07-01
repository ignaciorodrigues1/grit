import { ChakraProvider } from '@chakra-ui/react'

import RootLayout from '../layouts/layout'
import Fonts from '../../public/fonts/Fonts';


import "../../styles/globals.css";

import LoadingScreen from '../components/loadingScreen';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider >
      <RootLayout>
        <Fonts />
        <LoadingScreen />
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  )
}

export default MyApp