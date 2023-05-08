import { Flex, useColorMode } from '@chakra-ui/react'
import ColorInput from './ColorInput'
import ColorIcon from './ColorIcon'
import { useRaffleStore } from '@/stores/raffleStore'
import FontIcon from './FontIcon'
import BackgroundIcon from './BackgroundIcon'

export default function EditMenu() {
  const {
    primaryColor,
    secondaryColor,
    textColor,
    setPrimaryColor,
    setSecondaryColor,
    setTextColor
  } = useRaffleStore()
  const { colorMode } = useColorMode()
  console.log({ primaryColor, secondaryColor, textColor })
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
            width={25}
            height={25}
            colorClassName={secondaryColor}
          />
        }
        colorSetter={setSecondaryColor}
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
    </Flex>
  )
}
