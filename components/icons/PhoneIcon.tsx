import { type IconProps } from '@/interfaces/Icons'

export default function PhoneIcon({
  width,
  height,
  colorClassName = 'black'
}: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        className={`stroke-${colorClassName}`}
        strokeLinejoin='round'
        strokeWidth={2}
        d='M3 6.5C3 14.508 9.492 21 17.5 21c.666 0 1.322-.045 1.964-.132.91-.123 1.536-.939 1.536-1.858v-2.569a2 2 0 0 0-1.367-1.897l-3.149-1.05a1.449 1.449 0 0 0-1.863 1.024 1.449 1.449 0 0 1-2.43.673l-3.382-3.382a1.449 1.449 0 0 1 .673-2.43 1.449 1.449 0 0 0 1.023-1.863l-1.05-3.148A2 2 0 0 0 7.559 3H4.99c-.92 0-1.735.625-1.858 1.536A14.63 14.63 0 0 0 3 6.5Z'
      />
    </svg>
  )
}
