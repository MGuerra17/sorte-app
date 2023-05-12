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
        maxLength={30}
        value={raffle.title}
        setter={raffle.setTitle}
      />
      <TextInput
        titulo='Articulo a rifar'
        maxLength={50}
        placeholder='Ej. Televisor de 50 pulgadas'
        value={raffle.description}
        setter={raffle.setDescription}
      />
      <Box className='flex flex-col md:flex-row gap-x-2 gap-y-5'>
        <TextInput
          leftAddon='$'
          titulo='Precio por numero'
          maxLength={9}
          type='number'
          placeholder='Ej. 10.000'
          value={raffle.price}
          setter={raffle.setPrice}
        />
        <ImageInput title='Imagen' />
      </Box>
      <OptionsPicker
        id='paymentMethodsPicker'
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
          maxLength={10}
          type='number'
          value={raffle.phone}
          setter={raffle.setPhone}
        />
      </Box>
      <TextInput
        titulo='Metodo de sorteo'
        placeholder='Ej. Ultimos 2 digitos de la loteria nacional'
        maxLength={50}
        value={raffle.winCondition}
        setter={raffle.setWinCondition}
      />
      <TextInput
        titulo='Responsable de la rifa'
        maxLength={50}
        placeholder='Ej. Pedro Perez'
        value={raffle.responsible}
        setter={raffle.setResponsible}
      />
    </Stack>
  )
}
