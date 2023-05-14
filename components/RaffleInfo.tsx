import { Flex } from '@chakra-ui/react'
import RaffleTextInfo from './RaffleTextInfo'
import PrizeIcon from './icons/PrizeIcon'
import { formatCOP } from '@/utils/currency'
import PriceIcon from './icons/PriceIcon'
import DateIcon from './icons/DateIcon'
import TicketIcon from './icons/TicketIcon'
import PhoneIcon from './icons/PhoneIcon'
import ResponsibleIcon from './icons/ResponsibleIcon'
import { formatDate } from '@/utils/dates'
import { useRaffleStore } from '@/stores/raffleStore'
import { shallow } from 'zustand/shallow'

function useRaffleInfoStore() {
  return useRaffleStore(state => ({
    image: state.image,
    description: state.description,
    primaryColor: state.primaryColor,
    price: state.price,
    date: state.date,
    phone: state.phone,
    winCondition: state.winCondition,
    responsible: state.responsible
  }), shallow)
}

export default function RaffleInfo() {
  const {
    image,
    description,
    primaryColor,
    price,
    date,
    phone,
    winCondition,
    responsible
  } = useRaffleInfoStore()

  return (
    <Flex justify='space-between' paddingX={4} minHeight='92px'>
      <Flex direction='column' className='justify-start items-start'>
        <RaffleTextInfo
          icon={
            <PrizeIcon colorClassName={primaryColor} width={14} height={14} />
          }
          title='Premio'
          text={description}
        />
        <RaffleTextInfo
          icon={
            <PriceIcon colorClassName={primaryColor} width={14} height={14} />
          }
          title='Precio'
          text={price !== '' ? formatCOP(price) : ''}
        />
        <RaffleTextInfo
          icon={
            <DateIcon colorClassName={primaryColor} width={14} height={14} />
          }
          title='Fecha'
          text={formatDate(date)}
        />
        <RaffleTextInfo
          icon={
            <PhoneIcon colorClassName={primaryColor} width={14} height={14} />
          }
          title='Telefono'
          text={phone}
        />
        <RaffleTextInfo
          icon={
            <TicketIcon colorClassName={primaryColor} width={14} height={14} />
          }
          title='Sorteo'
          text={winCondition}
        />
        <RaffleTextInfo
          icon={
            <ResponsibleIcon
              colorClassName={primaryColor}
              width={14}
              height={14}
            />
          }
          title='Responsable'
          text={responsible}
          format={false}
        />
      </Flex>
      {image !== '' && (
        <img src={image} width='25%' className='aspect-square object-contain' />
      )}
    </Flex>
  )
}
