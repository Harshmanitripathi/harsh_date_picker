import {
    ChakraBaseProvider,
    extendBaseTheme as chakraTheme,
  } from '@chakra-ui/react'
import theme from '../theme'
  

export default function App({ Component, pageProps }) {
    return (
        <ChakraBaseProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraBaseProvider>
      )
  }