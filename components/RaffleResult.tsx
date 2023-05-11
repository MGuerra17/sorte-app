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

export default function RaffleResult({
  resRef
}: {
  resRef: RefObject<HTMLDivElement>
}) {
  const {
    title,
    description,
    price,
    date,
    phone,
    winCondition,
    responsible,
    backgroundColor,
    primaryColor,
    numbersColor
  } = useRaffleStore()
  const { isHydrated } = useHydrated()
  if (!isHydrated) return null
  return (
    <RaffleResultContainer resRef={resRef}>
      <RaffleTitle
        primaryColor={primaryColor}
        backgroundColor={backgroundColor}
        title={title}
      />
      <RaffleInfo
        primaryColor={primaryColor}
        description={description}
        price={price}
        date={date}
        phone={phone}
        winCondition={winCondition}
        responsible={responsible}
      />
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
