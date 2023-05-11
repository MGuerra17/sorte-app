import { type IconProps } from '@/interfaces/Icons'

export default function TicketIcon({
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
      <g className={`stroke-${colorClassName}`} strokeWidth={2}>
        <path strokeLinecap='round' d='M15 5v3M15 16v3M15 11v2' />
        <path d='M4.442 10.456c-.65-.722-1.475-1.521-1.363-2.486C3.359 5.57 4.46 5 7.648 5h8.704c3.188 0 4.29.569 4.569 2.97.112.965-.713 1.764-1.363 2.486-.316.351-.558.848-.558 1.544 0 .696.242 1.193.558 1.544.65.722 1.475 1.521 1.363 2.486-.28 2.401-1.381 2.97-4.569 2.97H7.648c-3.188 0-4.29-.569-4.569-2.97-.112-.965.714-1.764 1.363-2.486C4.758 13.193 5 12.696 5 12c0-.696-.242-1.193-.558-1.544Z' />
      </g>
    </svg>
  )
}
