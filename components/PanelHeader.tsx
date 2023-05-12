import { Box, Flex, Heading } from '@chakra-ui/react'
import Logo from './Logo'
import DarkModeToggler from './DarkModeToggler'
import GithubIcon from './icons/GithubIcon'

export default function PanelHeader() {
  return (
    <Box>
      <Flex justify='space-between' alignItems='center'>
        <Logo />
        <Flex justify='center' alignItems='center' gap={2}>
          <a
            href='https://github.com/MGuerra17/sorte-app'
            target='_blank'
            rel='noreferrer'
          >
            <GithubIcon width={26} height={26} />
          </a>
          <DarkModeToggler />
        </Flex>
      </Flex>
      <Heading className='mt-3'>Crear rifa</Heading>
    </Box>
  )
}
