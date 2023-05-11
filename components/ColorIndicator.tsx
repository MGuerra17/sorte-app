import useHydrated from '@/hooks/useHydrated'
import { Box } from '@chakra-ui/react'

export default function ColorIndicator({ color }: { color: string }) {
  const { isHydrated } = useHydrated()
  return (
    <Box
      rounded={'full'}
      width={2}
      height={2}
      position='absolute'
      bottom={0}
      right={0}
      className={isHydrated ? `bg-${color}` : 'bg-current'}
    />
  )
}
