import { Flex, Text } from '@chakra-ui/react'
import NequiIcon from './icons/NequiIcon'
import BancolombiaIcon from './icons/BancolombiaIcon'
import DaviplataIcon from './icons/DaviplataIcon'
import { type SelectOption } from '@/interfaces/Raffle'
import { useRaffleStore } from '@/stores/raffleStore'
import { shallow } from 'zustand/shallow'

function useRafflePaymentMethodsStore() {
  return useRaffleStore(state => ({
    payment: state.payment
  }), shallow)
}

export default function PaymentMethods() {
  const { payment } = useRafflePaymentMethodsStore()

  if ((payment as SelectOption[]).length < 1) return null

  return (
    <Flex
      gap={6}
      alignItems='center'
      height='42px'
      backgroundColor='#ffffff'
      paddingX={4}
    >
      <Text fontWeight={700} textColor='#000000'>
        Metodos de pago:
      </Text>
      {(payment as SelectOption[])?.map(({ value }) => {
        switch (value) {
          case 'nequi':
            return <NequiIcon key='nequi' height={30} width={60} />
          case 'bancolombia':
            return <BancolombiaIcon key='bancolombia' height={30} width={60} />
          default:
            return <DaviplataIcon key='daviplata' height={23} width={46} />
        }
      })}
    </Flex>
  )
}
