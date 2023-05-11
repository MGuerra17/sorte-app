import { type IconProps } from '@/interfaces/Icons'

export default function ResponsibleIcon({
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
        className={`fill-${colorClassName}`}
        fillRule='evenodd'
        d='M10 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm3.506 6.565a5 5 0 1 0-7.007.005C3.75 12.537 2 14.626 2 17a1 1 0 1 0 2 0c0-1.73 1.93-4 6-4 2.615 0 4.405.972 5.299 2.116a1 1 0 0 0 1.576-1.232c-.785-1.004-1.935-1.815-3.37-2.319Zm9.108 3.646a1 1 0 0 1 .175 1.403l-4.666 6a1 1 0 0 1-1.484.106l-2.333-2.25a1 1 0 1 1 1.388-1.44l1.533 1.478 3.984-5.122a1 1 0 0 1 1.403-.175Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
