import { FormControl, FormLabel, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import Select, { type MultiValue } from 'react-select'

const options = [
  { value: 'nequi', label: 'Nequi' },
  { value: 'bancolombia', label: 'Bancolombia' },
  { value: 'daviplata', label: 'Daviplata' },
  { value: 'paypal', label: 'Paypal' },
  { value: 'efectivo', label: 'Efectivo' }
]

interface SelectOption {
  value: string
  label: string
}

interface PaymentMethodsPickerProps {
  titulo: string
  required?: boolean
  errorMessage?: string
}

export default function PaymentMethodsPicker({
  titulo,
  required = false,
  errorMessage
}: PaymentMethodsPickerProps) {
  const [value, setValue] = useState<MultiValue<SelectOption>>([])
  const { colorMode } = useColorMode()

  return (
    <FormControl isInvalid={false}>
      <FormLabel>
        {titulo}
        {required ? <span className='text-red-600'> *</span> : ''}
      </FormLabel>
      <Select
        value={value}
        styles={{
          control: (base, { isFocused }) => ({
            ...base,
            outline: isFocused ? '2px solid #22c55e' : '1px solid #e5e7eb',
            boxShadow: 'none',
            border: 'none',
            backgroundColor: colorMode === 'light' ? '#fff' : '#1a202c',
            color: colorMode === 'light' ? '#000' : '#fff',
            padding: '0.5rem 0',
            borderRadius: '0.5rem'
          }),
          menuList: (base, props) => ({
            ...base,
            backgroundColor: colorMode === 'light' ? '#fff' : '#1a202c'
          }),
          multiValue: (base, { isFocused }) => ({
            ...base,
            padding: '0.3rem 0.5rem',
            backgroundColor: 'rgb(74,222,128,0.2)'
          }),
          multiValueRemove: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? 'rgb(74,222,128,0.2)' : 'transparent'
          })
        }}
        isMulti
        options={options}
        onChange={(e) => {
          setValue(e)
        }}
        placeholder='Select option'
      />

      {/* {false ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null} */}
    </FormControl>
  )
}
