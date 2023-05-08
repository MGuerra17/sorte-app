'use client'

import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState } from 'react'

interface TextInputProps {
  titulo: string
  placeholder: string
  className?: string
  required?: boolean
  errorMessage?: string
}

export default function TextInput({
  titulo,
  placeholder,
  className,
  required = false,
  errorMessage
}: TextInputProps) {
  const [value, setValue] = useState<string>('')

  return (
    <FormControl isInvalid={false} className={className}>
      <FormLabel>
        {titulo}
        {required ? <span className='text-red-600'> *</span> : ''}
      </FormLabel>
      <Input
        focusBorderColor='green.400'
        size='lg'
        placeholder={placeholder}
        type='text'
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />

      {/* {false ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null} */}
    </FormControl>
  )
}
