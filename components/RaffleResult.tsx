import { useRaffleStore } from '@/stores/raffleStore'
import { Box } from '@chakra-ui/react'

export default function RaffleResult() {
  const { title } = useRaffleStore()
  return (
    <Box
      backgroundColor='red'
      className='w-2/3 md:w-[300px] lg:w-[400px] aspect-[4/6]'
    >
      {title}
    </Box>
  )
}
