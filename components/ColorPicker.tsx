import { Flex, Stack, useColorMode } from '@chakra-ui/react'
import ColorButton from './ColorButton'
import { useEffect, useState } from 'react'

const colors = [
  'bg-red-600',
  'bg-orange-600',
  'bg-amber-400',
  'bg-emerald-300',
  'bg-green-500',
  'bg-blue-950',
  'bg-blue-700',
  'bg-sky-300',
  'bg-pink-300',
  'bg-purple-600'
]

export default function ColorPicker() {
  const [currentColor, setCurrentColor] = useState<string>('bg-red-600')
  const { colorMode } = useColorMode()
  useEffect(() => {
    console.log(currentColor)
  }, [currentColor])
  return (
    <Stack
      spacing={2}
      className={`${
        colorMode === 'light' ? 'bg-white' : 'bg-[#1a202c]'
      } inline-block p-3 rounded-md`}
    >
      <Flex gap={2}>
        {colors.slice(0, 5).map((color) => (
          <ColorButton
            key={color}
            action={() => {
              setCurrentColor(color)
            }}
            colorClass={color}
          />
        ))}
      </Flex>

      <Flex gap={2}>
        {colors.slice(5, 10).map((color) => (
          <ColorButton
            key={color}
            action={() => {
              setCurrentColor(color)
            }}
            colorClass={color}
          />
        ))}
      </Flex>
    </Stack>
  )
}
