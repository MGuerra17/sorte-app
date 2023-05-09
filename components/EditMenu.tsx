import { Flex, useColorMode } from '@chakra-ui/react'
import ColorInput from './ColorInput'
import ColorIcon from './icons/ColorIcon'
import { useRaffleStore } from '@/stores/raffleStore'
import FontIcon from './icons/FontIcon'
import BackgroundIcon from './icons/BackgroundIcon'
import NumbersIcon from './icons/NumbersIcon'

export default function EditMenu() {
  const {
    primaryColor,
    backgroundColor,
    textColor,
    numbersColor,
    setPrimaryColor,
    setBackgroundColor,
    setTextColor,
    setNumbersColor
  } = useRaffleStore()
  const { colorMode } = useColorMode()

  return (
    <Flex
      backgroundColor={colorMode === 'light' ? 'gray.200' : '#1e2634'}
      rounded='full'
      justify='space-between'
      alignItems='center'
      paddingY={1}
      paddingX={6}
      gap={6}
    >
      <ColorInput
        icon={
          <BackgroundIcon
            width={23}
            height={23}
            colorClassName={backgroundColor}
          />
        }
        colorSetter={setBackgroundColor}
      />
      <ColorInput
        icon={
          <ColorIcon width={25} height={25} colorClassName={primaryColor} />
        }
        colorSetter={setPrimaryColor}
      />
      <ColorInput
        icon={<FontIcon width={25} height={25} colorClassName={textColor} />}
        colorSetter={setTextColor}
      />
      <ColorInput
        icon={
          <NumbersIcon width={25} height={25} colorClassName={numbersColor} />
        }
        colorSetter={setNumbersColor}
      />
    </Flex>
  )
}
