'use client'
import { Box, Center, Text } from '@chakra-ui/react'

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
      <Box overflow='hidden' paddingX={3} className={`bg-${backgroundColor}`}>
        <Text
          maxWidth='360px'
          display='inline-block'
          textAlign='center'
          fontWeight={700}
          fontSize='22px'
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
        >
          {title.toLocaleUpperCase()}
        </Text>
      </Box>
    </Center>
  )
}
