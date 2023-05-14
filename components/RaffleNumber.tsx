import { useRaffleStore } from '@/stores/raffleStore'
import { Box } from '@chakra-ui/react'
import { shallow } from 'zustand/shallow'

function useRaffleNumberStore() {
  return useRaffleStore(state => ({
    backgroundColor: state.backgroundColor,
    addSoldNumber: state.addSoldNumber,
    removeSoldNumber: state.removeSoldNumber,
    soldNumbers: state.soldNumbers,
    numbersColor: state.numbersColor
  }), shallow)
}

export default function RaffleNumber({ number }: { number: string }) {
  const {
    backgroundColor,
    addSoldNumber,
    removeSoldNumber,
    soldNumbers,
    numbersColor
  } = useRaffleNumberStore()

  const isSold = soldNumbers.includes(number)

  const handleClick = () => {
    if (isSold) removeSoldNumber(number)
    else addSoldNumber(number)
  }

  return (
    <Box
      width='full'
      aspectRatio='1/1'
      display='flex'
      justifyContent='center'
      alignItems='center'
      className={isSold ? `bg-${numbersColor}` : `bg-${backgroundColor}`}
      onClick={handleClick}
      cursor='pointer'
    >
      {number}
    </Box>
  )
}
