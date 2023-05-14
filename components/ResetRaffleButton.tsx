import useHydrated from '@/hooks/useHydrated'
import { useRaffleStore } from '@/stores/raffleStore'
import { shallow } from 'zustand/shallow'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react'

// title: '',
//   description: '',
//   price: '',
//   image: '',
//   date: null,
//   phone: '',
//   winCondition: '',
//   responsible: '',
//   payment: [],
//   backgroundColor: 'white',
//   primaryColor: 'sky-300',
//   textColor: 'black',
//   numbersColor: 'orange-400',
//   soldNumbers: []

function useRaffleResetStateStore() {
  return useRaffleStore(state => ({
    resetState: state.resetState,
    title: state.title,
    description: state.description,
    price: state.price,
    image: state.image,
    date: state.date,
    phone: state.phone,
    winCondition: state.winCondition,
    responsible: state.responsible,
    payment: state.payment,
    soldNumbers: state.soldNumbers
  }), shallow)
}

export default function ResetRaffleButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    resetState,
    title,
    description,
    price,
    image,
    date,
    phone,
    winCondition,
    responsible,
    payment,
    soldNumbers
  } = useRaffleResetStateStore()

  const { isHydrated } = useHydrated()

  const raffleData = [
    title,
    description,
    price,
    image,
    date,
    phone,
    winCondition,
    responsible,
    payment,
    soldNumbers
  ]

  const isRaffleDataEmpty = raffleData.every((data) => {
    return (data as [])?.length === 0 || data === null
  })

  if (!isHydrated || isRaffleDataEmpty) return <div className='w-[83px]' />

  const handleReset = () => {
    resetState()
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme='red' variant='ghost'>
        Reiniciar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              className='text-xl'
              fontWeight={600}
              textAlign='center'
              marginBottom={3}
            >
              ¿Está seguro que desea reiniciar la rifa?
            </Text>
            <Text className='text-sm'>
              Una vez reiniciada se perderá toda la informacion permanentemente.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={handleReset}>
              Reiniciar
            </Button>
            <Button colorScheme='gray' onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
