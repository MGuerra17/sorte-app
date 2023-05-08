import { Box } from '@chakra-ui/react'

interface SvgProps {
  width: number
  height: number
  colorClassName?: string
}

export default function BackgroundIcon({
  width = 10,
  height = 10,
  colorClassName = 'bg-blue-500'
}: SvgProps) {
  return (
    <Box position='relative' paddingTop={1}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        width={width}
        height={height}
        viewBox='0 0 59 59'
      >
        <path
          d='M13 16.81A3.81 3.81 0 0 1 16.81 13H47V4.81A3.81 3.81 0 0 0 43.19 1H4.81A3.81 3.81 0 0 0 1 4.81v38.38A3.81 3.81 0 0 0 4.81 47H13V16.81z'
          className={`fill-${colorClassName.split('-').slice(1, 3).join('-')}`}
        />
        <path
          d='M14 48H4.81A4.815 4.815 0 0 1 0 43.19V4.81A4.815 4.815 0 0 1 4.81 0h38.38A4.815 4.815 0 0 1 48 4.81V14H16.81A2.814 2.814 0 0 0 14 16.81V48zM4.81 2A2.814 2.814 0 0 0 2 4.81v38.38A2.814 2.814 0 0 0 4.81 46H12V16.81A4.815 4.815 0 0 1 16.81 12H46V4.81A2.814 2.814 0 0 0 43.19 2H4.81z'
          className={`fill-${colorClassName.split('-').slice(1, 3).join('-')}`}
        />
        <path
          className='fill-current'
          d='M55.19 59H16.81A3.81 3.81 0 0 1 13 55.19V16.81A3.81 3.81 0 0 1 16.81 13h38.38A3.81 3.81 0 0 1 59 16.81v38.38A3.81 3.81 0 0 1 55.19 59z'
        />
      </svg>
    </Box>
  )
}
