import { Flex, Text } from '@chakra-ui/react'

interface RaffleTextInfoProps {
  icon: React.ReactNode
  format?: boolean
  title?: string
  text?: string
}

export default function RaffleTextInfo({
  icon,
  format = true,
  title,
  text
}: RaffleTextInfoProps) {
  if (text == null || text === '') return null
  return (
    <Flex gap={1} alignItems='center'>
      <span>{icon}</span>
      <Flex gap={0.5}>
        {title == null ? null : <Text fontWeight={700}>{title}:</Text>}
        {format
          ? text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase()
          : text}
      </Flex>
    </Flex>
  )
}
