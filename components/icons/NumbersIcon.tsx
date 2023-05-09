import { type IconProps } from '@/interfaces/Icons'
import { Box } from '@chakra-ui/react'

export default function NumbersIcon({
  width = 10,
  height = 10,
  colorClassName = 'blue-700'
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
          className='fill-current'
          d='M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z'
          opacity={0.1}
        />
        <path
          className='stroke-current'
          strokeWidth={2}
          d='M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z'
        />
        <path
          className='stroke-current'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='m9 12 1.683 1.683v0c.175.175.459.175.634 0v0L15 10'
        />
      </svg>
      <Box
        rounded={'full'}
        width={2}
        height={2}
        position='absolute'
        bottom={0}
        right={0}
        className={`bg-${colorClassName}`}
      />
    </Box>
  )
}
