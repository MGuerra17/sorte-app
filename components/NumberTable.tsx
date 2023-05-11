import { useRaffleStore } from '@/stores/raffleStore'
import { Center, Grid } from '@chakra-ui/react'
import RaffleNumber from './RaffleNumber'
import { memo } from 'react'

function NumberTable({ numbersList }: { numbersList: string[] }) {
  const { textColor } = useRaffleStore()
  return (
    <Center width='full' paddingX={4} paddingY={3}>
      <Grid
        width='full'
        templateColumns='repeat(10,1fr)'
        paddingX={4}
        padding='1px'
        gap='1px'
        className={`bg-${textColor}`}
      >
        {[...numbersList].map((_, i) => (
          <RaffleNumber key={i} number={i < 10 ? `0${i}` : i.toString()} />
        ))}
      </Grid>
    </Center>
  )
}

export default memo(NumberTable)
