import useHydrated from '@/hooks/useHydrated'

export default function ImageInputText({
  isDragActive,
  image
}: {
  isDragActive: boolean
  image: string
}) {
  const { isHydrated } = useHydrated()

  if (!isHydrated) return null

  if (isDragActive) return <p className='text-center'>Soltar aqui</p>
  return (
    <>
      <p className='text-center text-ellipsis whitespace-nowrap hidden lg:block'>
        {image === '' ? 'Seleccionar o arrastrar imagen' : 'Modificar imagen'}
      </p>
      <p className='text-center text-ellipsis whitespace-nowrap lg:hidden'>
        {image === '' ? 'Seleccionar imagen' : 'Modificar imagen'}
      </p>
    </>
  )
}
