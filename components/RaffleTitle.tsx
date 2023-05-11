'use client'
import { Center, Text } from '@chakra-ui/react'

export default function RaffleTitle({
  primaryColor,
  backgroundColor,
  title
}: {
  primaryColor: string
  backgroundColor: string
  title: string
}) {
  return (
    <Center className={`bg-${primaryColor} h-2 my-5`} width='full'>
      <Text
        display='inline-block'
        textAlign='center'
        fontWeight={700}
        fontSize='26px'
        paddingX={3}
        className={`bg-${backgroundColor}`}
      >
        {title}
      </Text>
    </Center>
  )
}
