import { useRaffleStore } from '@/stores/raffleStore'
import { Box, Heading, Text } from '@chakra-ui/react'
import { type RefObject } from 'react'

export default function RaffleResult({
  resRef
}: {
  resRef: RefObject<HTMLDivElement>
}) {
  const {
    title,
    description,
    price,
    textColor,
    backgroundColor,
    primaryColor
  } = useRaffleStore()

  return (
    <Box
      ref={resRef}
      rounded={10}
      padding={5}
      backgroundColor='white'
      className={`w-3/4 max-w-lg aspect-[1/1.4142] mt-10 md:mt-0 shadow-lg text-${textColor} bg-${backgroundColor}`}
    >
      <Heading>Titulo: {title}</Heading>
      <Text>Descripcion: {description}</Text>
      <Text>Precio: {price}</Text>
      <Box width={30} height={30} className={`bg-${primaryColor}`} />
    </Box>
  )
}
