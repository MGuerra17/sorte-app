'use client'

import DarkModeToggler from '@/components/DarkModeToggler'
import DateInput from '@/components/DateInput'
import DownloadButton from '@/components/DownloadButton'
import EditMenu from '@/components/EditMenu'
import Logo from '@/components/Logo'
import OptionsPicker from '@/components/OptionsPicker'
import RaffleResult from '@/components/RaffleResult'
import ResultContainer from '@/components/ResultContainer'
import TextInput from '@/components/TextInput'
import { useRaffleStore } from '@/stores/raffleStore'
import { paymentMethods } from '@/utils/constants'
import { Box, Center, Flex, Heading, Stack } from '@chakra-ui/react'
import { createRef } from 'react'

export default function Home() {
  const raffle = useRaffleStore()
  const resultRef = createRef<HTMLDivElement>()

  return (
    <main className='w-full flex flex-wrap md:flex-nowrap min-h-screen'>
      <Stack
        direction='column'
        gap={1}
        width={{ base: '100%', md: 700 }}
        padding={4}
        shadow='lg'
        zIndex={10}
      >
        <Box>
          <Flex justify='space-between' alignItems='center'>
            <Logo />
            <DarkModeToggler />
          </Flex>
          <Heading className='mt-3 mb-3'>Crear rifa</Heading>
        </Box>
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
        <TextInput
          titulo='Precio por numero'
          placeholder='Ej. 10.000'
          value={raffle.price}
          setter={raffle.setPrice}
        />

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
      <ResultContainer>
        <Flex
          align='center'
          justify='space-between'
          height={14}
          paddingX={{ base: 4, md: 8 }}
          marginTop={3}
        >
          <EditMenu />
          <DownloadButton resRef={resultRef} />
        </Flex>
        <Center className='flex-1'>
          <RaffleResult resRef={resultRef} />
        </Center>
      </ResultContainer>
    </main>
  )
}
