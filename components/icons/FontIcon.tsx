import { type IconProps } from '@/interfaces/Icons'
import { Box } from '@chakra-ui/react'
import ColorIndicator from '../ColorIndicator'

export default function FontIcon({
  width,
  height,
  colorClassName = 'black'
}: IconProps) {
  return (
    <Box position='relative' paddingTop={1}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          className='stroke-current'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 18 8 6 3 18m8-4H5m16 4v-3m0 0v-3m0 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        />
      </svg>
      <ColorIndicator color={colorClassName} />
    </Box>
  )
}
