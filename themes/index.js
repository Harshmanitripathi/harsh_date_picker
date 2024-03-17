import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
  } from '@chakra-ui/react'
  
  const { Button , Textarea} = chakraTheme.components
  
  const theme = extendBaseTheme({
    components: {
      Button,
      Textarea,
    },
  })

  export default theme;