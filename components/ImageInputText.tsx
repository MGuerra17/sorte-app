export default function ImageInputText({
  isDragActive,
  image
}: {
  isDragActive: boolean
  image: string
}) {
  if (isDragActive) return <p className='text-center'>Soltar aqui</p>
  return (
    <p className='text-center'>
      {image === '' ? 'Seleccionar o arrastrar imagen' : 'Modificar imagen'}
    </p>
  )
}