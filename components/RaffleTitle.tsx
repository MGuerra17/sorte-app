'use client'
import { useRaffleStore } from '@/stores/raffleStore'
import { Box, Center, Text } from '@chakra-ui/react'
import { shallow } from 'zustand/shallow'

function useRaffleTitleStore() {
  return useRaffleStore(state => ({
    title: state.title,
    primaryColor: state.primaryColor,
    backgroundColor: state.backgroundColor
  }), shallow)
}

export default function RaffleTitle() {
  const { title, primaryColor, backgroundColor } = useRaffleTitleStore()

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
