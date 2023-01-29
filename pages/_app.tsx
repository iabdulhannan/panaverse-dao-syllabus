import 'daoRoot/styles/globals.css'
import type {AppProps} from 'next/app'
import '@fontsource/inter/400.css'
import {Box, ChakraProvider, extendTheme} from "@chakra-ui/react";
import {Footer} from "daoRoot/components/Footer";
import React from "react";
import Header from "daoRoot/components/Header";

const theme = extendTheme({
  colors: {
    panaverse: {
      100: "#caf0f8",
      200: "#90e0ef",
      300: "#6188b8",
      400: "#2d6dbb",
      500: "#286abd",

    },
    panaverseRed: '#D3102D',
    fonts: {
      heading: `Inter', sans-serif`,
      text: `Inter', sans-serif`,
    },
  },
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Box px={5} pt={16} scrollBehavior={"smooth"} scrollMarginTop={16}>
        <Component {...pageProps} />
      </Box>
      <Footer/>
    </ChakraProvider>
  )
}
