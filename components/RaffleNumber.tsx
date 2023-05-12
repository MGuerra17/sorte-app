import { useRaffleStore } from '@/stores/raffleStore'
import { Box } from '@chakra-ui/react'

export default function RaffleNumber({ number }: { number: string }) {
  const {
    backgroundColor,
    addSoldNumber,
    removeSoldNumber,
    soldNumbers,
    numbersColor
  } = useRaffleStore()

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
