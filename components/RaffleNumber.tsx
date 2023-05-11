import { useRaffleStore } from '@/stores/raffleStore'
import { Box } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'

export default function RaffleNumber({ number }: { number: string }) {
  const [sold, setSold] = useState(false)
  const {
    backgroundColor,
    addSoldNumber,
    removeSoldNumber,
    soldNumbers,
    numbersColor
  } = useRaffleStore()
  useEffect(() => {
    if (soldNumbers.includes(number)) setSold(true)
  }, [])

  const handleClick = useCallback(() => {
    setSold((prevState) => !prevState)
    if (sold) removeSoldNumber(number)
    addSoldNumber(number)
  }, [])
  return (
    <Box
      width='full'
      aspectRatio='1/1'
      display='flex'
      justifyContent='center'
      alignItems='center'
      className={sold ? `bg-${numbersColor}` : `bg-${backgroundColor}`}
      onClick={handleClick}
      cursor='pointer'
    >
      {number}
    </Box>
  )
}
