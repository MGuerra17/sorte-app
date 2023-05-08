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
      } inline-block p-3 rounded-md hover:shadow-red-200`}
    >
      <Flex gap={2}>
        {colorList.slice(0, 6).map(({ color, shadow }) => (
          <ColorButton
            key={color}
            action={() => {
              colorSetter(color)
            }}
            colorClass={color}
            shadowClass={shadow}
          />
        ))}
      </Flex>

      <Flex gap={2}>
        {colorList.slice(5, 11).map(({ color, text, shadow }) => (
          <ColorButton
            key={color}
            action={() => {
              colorSetter(isFont ? text : color)
            }}
            colorClass={color}
            shadowClass={shadow}
          />
        ))}
      </Flex>
    </Stack>
  )
}
