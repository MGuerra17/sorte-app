import { useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function DarkModeToggler() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <button onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <MoonIcon
          w={5}
          h={5}
          color='gray.400'
          _hover={{ color: 'gray.500' }}
          className='hover:fill-[#718096]'
        />
      ) : (
        <SunIcon w={5} h={5} />
      )}
    </button>
  )
}
