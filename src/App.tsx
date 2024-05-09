import {
  Box,
  Button,
  ChakraProvider,
  Code,
  Grid,
  Link,
  Text,
  VStack,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { getTextCompletion } from "./yandex"

export const App = () => {

const options = {
  messages: [
    {
      role: 'user',
      text: 'Столица России?'  
    }
  ]
}

const handleBtnClick = () => {
  getTextCompletion(options)
}
   

return (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>

          <Button width={'300px'} h={'100px'} bgColor={'blue'} onClick={handleBtnClick} content="ASK GPT" />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)

}