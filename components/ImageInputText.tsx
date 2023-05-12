import useHydrated from '@/hooks/useHydrated'

export default function ImageInputText({
  isDragActive,
  image
}: {
  isDragActive: boolean
  image: string
}) {
  const { isHydrated } = useHydrated()

  if (!isHydrated || image === '') {
    return <p className='text-center'>Seleccionar imagen</p>
  }
  if (isDragActive) return <p className='text-center'>Soltar aqui</p>

  return <p className='text-center text-orange-300'>Modificar imagen</p>
}
