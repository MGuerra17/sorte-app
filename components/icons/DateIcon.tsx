import { type IconProps } from '@/interfaces/Icons'

export default function DateIcon({
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
        strokeLinecap='round'
        strokeWidth={2}
        d='M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3m16 0v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9m16 0H4m4-7v4m8-4v4'
      />
      <rect
        className={`fill-${colorClassName}`}
        width={3}
        height={3}
        x={6}
        y={12}
        rx={0.5}
      />
      <rect
        className={`fill-${colorClassName}`}
        width={3}
        height={3}
        x={10.5}
        y={12}
        rx={0.5}
      />
      <rect
        className={`fill-${colorClassName}`}
        width={3}
        height={3}
        x={15}
        y={12}
        rx={0.5}
      />
    </svg>
  )
}
