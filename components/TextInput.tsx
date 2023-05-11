import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'

interface TextInputProps {
  titulo: string
  placeholder: string
  leftAddon?: string
  value?: string
  setter: (value: string) => void
  required?: boolean
}

export default function TextInput({
  titulo,
  placeholder,
  value = '',
  leftAddon,
  setter,
  required = false
}: TextInputProps) {
  return (
    <Box width='100%'>
      <FormLabel>
        {titulo}
        {required ? <span className='text-red-600'> *</span> : ''}
      </FormLabel>
      <InputGroup>
        {leftAddon != null && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
        <Input
          focusBorderColor='green.400'
          placeholder={placeholder}
          type='text'
          value={value}
          onChange={(e) => {
            setter(e.target.value)
          }}
        />
      </InputGroup>
    </Box>
  )
}
