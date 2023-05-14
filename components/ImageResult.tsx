import useHydrated from '@/hooks/useHydrated'

export default function ImageResult({ image }: { image: string }) {
  const { isHydrated } = useHydrated()
  if (image === '' || !isHydrated) return null
  return (
    <img src={image} width='25%' className='aspect-square object-contain' />
  )
}
