import { type RefObject } from 'react'
import { useRaffleStore } from '@/stores/raffleStore'
import { Box, Flex, Text } from '@chakra-ui/react'
import NumberTable from './NumberTable'
import { Baloo_2 } from 'next/font/google'
import { numbers } from '@/utils/constants'
import RaffleTitle from './RaffleTitle'
import RaffleInfo from './RaffleInfo'
import PaymentMethods from './PaymentMethods'
import useHydrated from '@/hooks/useHydrated'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['400', '700'] })

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
    textColor,
    backgroundColor,
    primaryColor,
    numbersColor
  } = useRaffleStore()
  const { isHydrated } = useHydrated()
  if (!isHydrated) return null
  return (
    <Box
      ref={resRef}
      backgroundColor='white'
      className={`transform scale-[.8] lg:scale-100 w-[400px] aspect-[1/1.5] mt-10 md:mt-0 shadow-lg text-${textColor} bg-${backgroundColor} ${baloo.className}`}
      fontSize='10px'
    >
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
    </Box>
  )
}
