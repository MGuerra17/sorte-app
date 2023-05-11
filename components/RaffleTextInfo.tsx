import { Flex, Text } from '@chakra-ui/react'

interface RaffleTextInfoProps {
  icon: React.ReactNode
  title?: string
  text?: string
}

export default function RaffleTextInfo({
  icon,
  title,
  text
}: RaffleTextInfoProps) {
  if (text == null || text === '') return null
  return (
    <Flex gap={1} alignItems='center'>
      <span>{icon}</span>
      <Flex gap={0.5}>
        {title == null ? null : <Text fontWeight={700}>{title}:</Text>}
        {text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase()}
      </Flex>
    </Flex>
  )
}
