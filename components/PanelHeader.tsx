import { Box, Flex, Heading } from '@chakra-ui/react'
import Logo from './Logo'
import DarkModeToggler from './DarkModeToggler'

export default function PanelHeader() {
  return (
    <Box>
      <Flex justify='space-between' alignItems='center'>
        <Logo />
        <DarkModeToggler />
      </Flex>
      <Heading className='mt-3 mb-3'>Crear rifa</Heading>
    </Box>
  )
}
