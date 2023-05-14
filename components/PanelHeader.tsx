import { Box, Flex, Heading } from '@chakra-ui/react'
import Logo from './Logo'
import DarkModeToggler from './DarkModeToggler'
import ResetRaffleButton from './ResetRaffleButton'

export default function PanelHeader() {
  return (
    <Box>
      <Flex justify='space-between' alignItems='center' marginBottom={3}>
        <Logo />
        <DarkModeToggler />
      </Flex>
      <Flex justify='space-between' alignItems='center'>
        <Heading>Crear rifa</Heading>
        <ResetRaffleButton />
      </Flex>
    </Box>
  )
}
