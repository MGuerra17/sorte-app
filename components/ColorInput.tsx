import { Box } from '@chakra-ui/react'
import ColorPicker from './ColorPicker'
import useColorPicker from '@/hooks/useColorPicker'
import { type ReactNode } from 'react'

interface ColorInputProps {
  icon: ReactNode
  colorSetter: (color: string) => void
}

export default function ColorInput({ icon, colorSetter }: ColorInputProps) {
  const { show, setShow, ref } = useColorPicker()

  return (
    <Box ref={ref} display='inline-block' position='relative'>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {icon}
      </button>
      {show ? <ColorPicker colorSetter={colorSetter} /> : null}
    </Box>
  )
}
