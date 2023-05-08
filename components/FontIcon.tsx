import { Box } from '@chakra-ui/react'

interface SvgProps {
  width: number
  height: number
  colorClassName?: string
}

export default function FontIcon({
  width = 10,
  height = 10,
  colorClassName = 'bg-black'
}: SvgProps) {
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
      <Box
        rounded={'full'}
        width={2}
        height={2}
        position='absolute'
        bottom={0}
        right={-1.5}
        className={colorClassName}
      />
    </Box>
  )
}
