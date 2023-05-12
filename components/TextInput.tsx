import useHydrated from '@/hooks/useHydrated'
import {
  Box,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Text
} from '@chakra-ui/react'

interface TextInputProps {
  titulo: string
  placeholder: string
  maxLength: number
  type?: string
  leftAddon?: string
  value?: string
  setter: (value: string) => void
  required?: boolean
}

export default function TextInput({
  titulo,
  placeholder,
  maxLength,
  type = 'text',
  value = '',
  leftAddon,
  setter,
  required = false
}: TextInputProps) {
  const { isHydrated } = useHydrated()
  return (
    <Box width='100%'>
      <Flex justify='space-between' alignItems='end'>
        <FormLabel>
          {titulo}
          {required ? <span className='text-red-600'> *</span> : ''}
        </FormLabel>
        <Text className='text-xs pb-1 text-[#51555E]'>
          {isHydrated ? value.length : 0}/{maxLength}
        </Text>
      </Flex>
      <InputGroup>
        {leftAddon != null && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
        <Input
          maxLength={maxLength}
          focusBorderColor='green.400'
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => {
            setter(e.target.value)
          }}
        />
      </InputGroup>
    </Box>
  )
}
