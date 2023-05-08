'use client'

import ColorPicker from '@/components/ColorPicker'
import DarkModeToggler from '@/components/DarkModeToggler'
import DateInput from '@/components/DateInput'
import Logo from '@/components/Logo'
import OptionsPicker from '@/components/OptionsPicker'
import TextInput from '@/components/TextInput'
import { paymentMethods } from '@/utils/constants'
import { Flex, Heading, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className='w-full flex flex-wrap md:flex-nowrap'>
      <div className='w-full md:w-[700px] h-fit md:h-screen px-6 py-4'>
        <Flex justify='space-between' alignItems='center'>
          <Logo />
          <DarkModeToggler />
        </Flex>
        <Heading className='mt-3 mb-3'>Crear rifa</Heading>
        <Stack spacing={5}>
          <TextInput
            titulo='Titulo de la rifa'
            placeholder='Ej. Gran rifa de aniversario'
          />
          <TextInput
            titulo='Articulo a rifar'
            placeholder='Ej. Televisor de 50 pulgadas'
          />
          <OptionsPicker
            titulo='Metodos de pago'
            placeholder='Seleccionar metodos de pago'
            options={paymentMethods}
            multi
          />
          <Flex gap={2}>
            <DateInput titulo='Fecha de la rifa' />
            <TextInput
              titulo='Telefono de contacto'
              placeholder='Ej. 300 123 4567'
            />
          </Flex>
          <TextInput
            titulo='Metodo de sorteo'
            placeholder='Ej. Ultimos 2 digitos de la loteria nacional'
          />
          <TextInput
            titulo='Responsable de la rifa'
            placeholder='Ej. Pedro Perez'
          />
        </Stack>
      </div>
      <div className='w-full bg-gray-50 h-screen inline-block'>
        <ColorPicker />
      </div>
    </main>
  )
}
