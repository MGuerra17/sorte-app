import { Box, useColorMode } from '@chakra-ui/react'

export default function ColorButton({
  colorClass,
  shadowClass,
  action
}: {
  colorClass: string
  shadowClass: string
  action?: () => void
}) {
  const { colorMode } = useColorMode()
  return (
    <button onClick={action}>
      <Box
        className={`${colorClass} ${shadowClass} ${
          colorMode === 'light' ? 'border-gray-200' : 'border-gray-700'
        } hover:shadow border border-1 hover:border-0 w-6 h-6 rounded`}
      />
    </button>
  )
}
