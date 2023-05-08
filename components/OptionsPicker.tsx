import { FormControl, FormLabel, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import Select, { type MultiValue, type SingleValue } from 'react-select'

interface SelectOption {
  value: string
  label: string
}

interface PaymentMethodsPickerProps {
  titulo: string
  placeholder: string
  options: SelectOption[]
  required?: boolean
  multi?: boolean
  errorMessage?: string
}
type Options = MultiValue<SelectOption> | SingleValue<SelectOption>
export default function OptionsPicker({
  titulo,
  placeholder,
  options,
  required = false,
  multi = false,
  errorMessage
}: PaymentMethodsPickerProps) {
  const [value, setValue] = useState<Options>([])
  const { colorMode } = useColorMode()

  return (
    <FormControl isInvalid={false}>
      <FormLabel>
        {titulo}
        {required ? <span className='text-red-600'> *</span> : ''}
      </FormLabel>
      <Select
        value={value}
        isSearchable={false}
        styles={{
          control: (base, { isFocused }) => ({
            ...base,
            outline: isFocused ? '2px solid #22c55e' : '1px solid #e5e7eb',
            boxShadow: 'none',
            border: 'none',
            backgroundColor: colorMode === 'light' ? '#fff' : '#1a202c',
            color: colorMode === 'light' ? '#000' : '#fff',
            padding: '0.2rem 0',
            borderRadius: '0.5rem'
          }),
          menuList: (base, props) => ({
            ...base,
            backgroundColor: colorMode === 'light' ? '#fff' : '#1a202c'
          }),
          option: (base, { isFocused, isSelected }) => ({
            padding: '0.5rem',
            backgroundColor: isFocused ? 'rgb(74,222,128,0.3)' : 'transparent'
          }),
          multiValue: (base, { isFocused }) => ({
            ...base,
            padding: '0.3rem 0.5rem',
            backgroundColor: 'rgb(74,222,128,0.3)',
            color: colorMode === 'light' ? '#000' : '#fff'
          }),
          multiValueLabel: (base, props) => ({
            ...base,
            color: colorMode === 'light' ? '#000' : '#fff'
          }),
          multiValueRemove: (base, { isFocused }) => ({
            color: colorMode === 'light' ? '#000' : '#fff',
            backgroundColor: isFocused ? '#f3f3f3' : 'transparent'
          })
        }}
        isMulti={multi}
        options={options}
        onChange={(e) => {
          setValue(e)
        }}
        placeholder={placeholder}
      />

      {/* {false ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null} */}
    </FormControl>
  )
}
