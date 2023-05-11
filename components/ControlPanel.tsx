import { Box, Stack } from '@chakra-ui/react'
import TextInput from './TextInput'
import { useRaffleStore } from '@/stores/raffleStore'
import OptionsPicker from './OptionsPicker'
import DateInput from './DateInput'
import { paymentMethods } from '@/utils/constants'
import PanelHeader from './PanelHeader'
import ImageInput from './ImageInput'

export default function ControlPanel() {
  const raffle = useRaffleStore()

  return (
    <Stack
      direction='column'
      gap={1}
      width={{ base: '100%', md: 700 }}
      padding={4}
      shadow='lg'
      zIndex={10}
    >
      <PanelHeader />
      <TextInput
        titulo='Titulo de la rifa'
        placeholder='Ej. Gran rifa de aniversario'
        value={raffle.title}
        setter={raffle.setTitle}
      />
      <TextInput
        titulo='Articulo a rifar'
        placeholder='Ej. Televisor de 50 pulgadas'
        value={raffle.description}
        setter={raffle.setDescription}
      />
      <Box className='flex flex-col md:flex-row gap-x-2 gap-y-5'>
        <TextInput
          titulo='Precio por numero'
          placeholder='Ej. 10.000'
          value={raffle.price}
          setter={raffle.setPrice}
        />
        <ImageInput title='Imagen' />
      </Box>
      <OptionsPicker
        titulo='Metodos de pago'
        placeholder='Seleccionar metodos de pago'
        options={paymentMethods}
        multi
      />
      <Box className='flex flex-col md:flex-row gap-x-2 gap-y-5'>
        <DateInput titulo='Fecha de la rifa' />
        <TextInput
          titulo='Telefono'
          placeholder='Ej. 300 123 4567'
          value={raffle.phone}
          setter={raffle.setPhone}
        />
      </Box>
      <TextInput
        titulo='Metodo de sorteo'
        placeholder='Ej. Ultimos 2 digitos de la loteria nacional'
        value={raffle.winCondition}
        setter={raffle.setWinCondition}
      />
      <TextInput
        titulo='Responsable de la rifa'
        placeholder='Ej. Pedro Perez'
        value={raffle.responsible}
        setter={raffle.setResponsible}
      />
    </Stack>
  )
}
