import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "../themes";


export default function App({ Component, pageProps }) {
    return (
        <ChakraBaseProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraBaseProvider>
      )
  }