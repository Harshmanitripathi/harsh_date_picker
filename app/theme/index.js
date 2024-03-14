import { extendTheme } from "@chakra-ui/react";
import { colorStyles as colors } from "./colors";
import { buttonStyles as Button } from "./buttonStyles";
import { inputStyles as Input } from "./inputStyles";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      overflowX: "hidden",
      bg: mode("gray.100", "black")(props),
    },
  }),
};
const theme = extendTheme({
    config: {
      initialColorMode: "white",
      useSystemColorMode: false,
    },
    colors,
    styles,
    fonts: {
      heading: `'Gilroy', sans-serif`,
      body: `'Gilroy', sans-serif`,
    },
    components: {
      Button,
      Input,
      Alert: {
        variants: {
          toast: (P) => {
            return {
              container: {
                ...P.theme.components.Alert.variants.solid(P).container,
                top: "150px",
                bg: "green.500",
              },
            };
          },
        },
      },
    },
  });
  
  export default theme;