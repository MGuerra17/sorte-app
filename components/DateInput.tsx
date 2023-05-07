'use client'

import { FormControl, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'

interface TextInputProps {
  titulo: string
  required?: boolean
  errorMessage?: string
}

export default function DateInput({
  titulo,
  required = false,
  errorMessage
}: TextInputProps) {
  const [value, setValue] = useState<Date | null>(new Date())

  return (
    <FormControl isInvalid={false}>
      <FormLabel>
        {titulo}
        {required ? <span className='text-red-600'> *</span> : ''}
      </FormLabel>
      <input
        value={value?.toISOString().split('T')[0] ?? ''}
        onChange={(e) => {
          setValue(e.target.valueAsDate)
        }}
        className='bg-transparent outline outline-1 outline-gray-200 p-3 w-full rounded-lg focus:outline-green-500 focus:outline-2 focus:outline-none'
        type='date'
      />

      {/* {false ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null} */}
    </FormControl>
  )
}
