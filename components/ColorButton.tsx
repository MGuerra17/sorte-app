import { Box } from '@chakra-ui/react'

export default function ColorButton({
  colorClass,
  action
}: {
  colorClass: string
  action?: () => void
}) {
  return (
    <button onClick={action}>
      <Box className={`${colorClass} w-6 h-6 rounded`} />
    </button>
  )
}
