'use client'

import { useRaffleStore } from '@/stores/raffleStore'
import { FormControl, FormLabel, useColorMode } from '@chakra-ui/react'
import { shallow } from 'zustand/shallow'

function useRaffleDateInputStore() {
  return useRaffleStore(state => ({
    date: state.date,
    setDate: state.setDate
  }), shallow)
}

interface DateInputProps {
  titulo: string
  required?: boolean
}

export default function DateInput({
  titulo,
  required = false
}: DateInputProps) {
  const { date, setDate } = useRaffleDateInputStore()
  const { colorMode } = useColorMode()

  return (
    <FormControl isInvalid={false} className='w-full md:w-2/5'>
      <FormLabel>
        {titulo}
        {required ? <span className='text-red-600'> *</span> : ''}
      </FormLabel>
      <input
        value={date != null ? new Date(date).toISOString().slice(0, 10) : ''}
        onChange={(e) => {
          setDate(e.target.valueAsDate)
        }}
        className={`bg-transparent outline outline-1 ${
          colorMode === 'light' ? 'outline-gray-200' : 'outline-[#3f444e]'
        } py-[0.8rem] px-[0.3rem] md:p-[0.38rem] mt-[0.1rem] w-full rounded-md focus:outline-green-500 focus:outline-2 focus:outline-none`}
        type='date'
      />
    </FormControl>
  )
}
