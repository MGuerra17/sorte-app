import { Box, Stack } from '@chakra-ui/react'
import TextInput from './TextInput'
import { useRaffleStore } from '@/stores/raffleStore'
import OptionsPicker from './OptionsPicker'
import DateInput from './DateInput'
import { paymentMethods } from '@/utils/constants'
import PanelHeader from './PanelHeader'
import ImageInput from './ImageInput'
import { shallow } from 'zustand/shallow'

function TitleInput() {
  const { title, setTitle } = useRaffleStore(state => ({
    title: state.title,
    setTitle: state.setTitle
  }), shallow)

  return (
    <TextInput
      titulo='Titulo de la rifa'
      placeholder='Ej. Gran rifa de aniversario'
      maxLength={30}
      value={title}
      setter={setTitle}
    />
  )
}

function DescriptionInput() {
  const { description, setDescription } = useRaffleStore(state => ({
    description: state.description,
    setDescription: state.setDescription
  }), shallow)

  return (
    <TextInput
      titulo='Articulo a rifar'
      maxLength={50}
      placeholder='Ej. Televisor de 50 pulgadas'
      value={description}
      setter={setDescription}
    />
  )
}

function PriceInput() {
  const { price, setPrice } = useRaffleStore(state => ({
    price: state.price,
    setPrice: state.setPrice
  }), shallow)

  return (
    <TextInput
      leftAddon='$'
      titulo='Precio por numero'
      maxLength={9}
      type='number'
      placeholder='Ej. 10.000'
      value={price}
      setter={setPrice}
    />
  )
}

function PhoneInput() {
  const { phone, setPhone } = useRaffleStore(state => ({
    phone: state.phone,
    setPhone: state.setPhone
  }), shallow)

  return (
    <TextInput
      titulo='Telefono'
      placeholder='Ej. 300 123 4567'
      maxLength={12}
      value={phone}
      setter={setPhone}
    />
  )
}

function WinConditionInput() {
  const { winCondition, setWinCondition } = useRaffleStore(state => ({
    winCondition: state.winCondition,
    setWinCondition: state.setWinCondition
  }), shallow)

  return (
    <TextInput
      titulo='Metodo de sorteo'
      placeholder='Ej. Ultimos 2 digitos de la loteria nacional'
      maxLength={50}
      value={winCondition}
      setter={setWinCondition}
    />
  )
}

function ResponsibleInput() {
  const { responsible, setResponsible } = useRaffleStore(state => ({
    responsible: state.responsible,
    setResponsible: state.setResponsible
  }), shallow)

  return (
    <TextInput
      titulo='Responsable de la rifa'
      maxLength={50}
      placeholder='Ej. Pedro Perez'
      value={responsible}
      setter={setResponsible}
    />
  )
}

export default function ControlPanel() {
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
      <TitleInput />
      <DescriptionInput />
      <Box className='flex flex-col md:flex-row gap-x-2 gap-y-5'>
        <PriceInput />
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
        <PhoneInput />
      </Box>
      <WinConditionInput />
      <ResponsibleInput />
    </Stack>
  )
}
