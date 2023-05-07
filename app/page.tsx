'use client'

import DarkModeToggler from '@/components/DarkModeToggler'
import DateInput from '@/components/DateInput'
import Logo from '@/components/Logo'
import PaymentMethodsPicker from '@/components/PaymentMethodsPicker'
import TextInput from '@/components/TextInput'
import { Flex, Heading, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className='w-full flex flex-wrap md:flex-nowrap'>
      <div className='w-full md:w-[600px] h-fit md:h-screen px-6 py-10'>
        <Flex justify='space-between' alignItems='center'>
          <Logo />
          <DarkModeToggler />
        </Flex>
        <Heading className='mt-8 mb-5'>Crear rifa</Heading>
        <Stack spacing={5}>
          <TextInput
            titulo='Titulo de la rifa'
            placeholder='Ej. Gran rifa de aniversario'
            required
          />
          <TextInput
            titulo='Articulo a rifar'
            placeholder='Ej. Televisor de 50 pulgadas'
            required
          />
          <DateInput titulo='Fecha de la rifa' required />
          <PaymentMethodsPicker titulo='Metodos de pago' required />
        </Stack>
      </div>
      <div className='w-full bg-green-400 h-screen inline-block'></div>
    </main>
  )
}
