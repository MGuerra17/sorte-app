import { Flex, Stack, useColorMode } from '@chakra-ui/react'
import ColorButton from './ColorButton'
import { colorList } from '@/utils/constants'
export default function ColorPicker({
  isFont = false,
  colorSetter
}: {
  isFont?: boolean
  colorSetter: (color: string) => void
}) {
  const { colorMode } = useColorMode()

  return (
    <Stack
      position='absolute'
      top='120%'
      left={0}
      spacing={2}
      className={`${
        colorMode === 'light' ? 'bg-gray-100' : 'bg-[#1a202c]'
      } inline-block p-3 rounded-md`}
    >
      <Flex gap={2}>
        {colorList.slice(0, 6).map((color) => (
          <ColorButton
            key={color}
            action={() => {
              colorSetter(color)
            }}
            colorClass={color}
          />
        ))}
      </Flex>

      <Flex gap={2}>
        {colorList.slice(6, 12).map((color) => (
          <ColorButton
            key={color}
            action={() => {
              colorSetter(isFont ? `text-${color}` : color)
            }}
            colorClass={color}
          />
        ))}
      </Flex>
    </Stack>
  )
}
