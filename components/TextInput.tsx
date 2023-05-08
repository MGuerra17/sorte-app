import { Box, FormLabel, Input } from '@chakra-ui/react'

interface TextInputProps {
  titulo: string
  placeholder: string
  value?: string
  setter: (value: string) => void
  required?: boolean
}

export default function TextInput({
  titulo,
  placeholder,
  value = '',
  setter,
  required = false
}: TextInputProps) {
  return (
    <Box width='100%'>
      <FormLabel>
        {titulo}
        {required ? <span className='text-red-600'> *</span> : ''}
      </FormLabel>
      <Input
        focusBorderColor='green.400'
        placeholder={placeholder}
        type='text'
        value={value}
        onChange={(e) => {
          setter(e.target.value)
        }}
      />
    </Box>
  )
}
