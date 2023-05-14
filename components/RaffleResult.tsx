import { type RefObject } from 'react'
import { useRaffleStore } from '@/stores/raffleStore'
import { Box, Flex, Text } from '@chakra-ui/react'
import NumberTable from './NumberTable'
import { numbers } from '@/utils/constants'
import RaffleTitle from './RaffleTitle'
import RaffleInfo from './RaffleInfo'
import PaymentMethods from './PaymentMethods'
import useHydrated from '@/hooks/useHydrated'
import RaffleResultContainer from './RaffleResultContainer'
import Loader from './Loader'

export default function RaffleResult({
  resRef
}: {
  resRef: RefObject<HTMLDivElement>
}) {
  const numbersColor = useRaffleStore(state => state.numbersColor)

  const { isHydrated } = useHydrated()
  if (!isHydrated) return <Loader />

  return (
    <RaffleResultContainer resRef={resRef}>
      <RaffleTitle />
      <RaffleInfo />
      <NumberTable numbersList={numbers} />
      <Flex
        justify='end'
        paddingX={4}
        paddingBottom={3}
        gap={1}
        alignItems='center'
      >
        <Box
          className={`bg-${numbersColor} aspect-[1/1]`}
          width={3}
          height={3}
          rounded='sm'
          marginRight={0.5}
        />
        <Text fontWeight={700}>No disponible</Text>
      </Flex>
      <PaymentMethods />
    </RaffleResultContainer>
  )
}
