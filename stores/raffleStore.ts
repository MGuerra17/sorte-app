import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Raffle } from '@/interfaces/Raffle'

interface RaffleStore extends Raffle {
  setTitle: (title: string) => void
  setDescription: (description: string) => void
  setPrice: (price: string) => void
  setPayment: (payment: string) => void
  setDate: (date: string) => void
  setPhone: (phone: string) => void
  setWinCondition: (winCondition: string) => void
  setResponsible: (responsible: string) => void
  setBackgroundColor: (backgroundColor: string) => void
  setPrimaryColor: (primaryColor: string) => void
  setTextColor: (textColor: string) => void
  setNumbersColor: (numbersColor: string) => void
}

export const useRaffleStore = create<RaffleStore>()(
  persist(
    (set) => ({
      title: '',
      description: '',
      price: '',
      payment: '',
      date: '',
      phone: '',
      winCondition: '',
      responsible: '',
      backgroundColor: 'blue-700',
      primaryColor: 'red-600',
      textColor: 'black',
      numbersColor: 'orange-600',
      setTitle: (title: string) => {
        set({ title })
      },
      setDescription: (description: string) => {
        set({ description })
      },
      setPrice: (price: string) => {
        set({ price })
      },
      setPayment: (payment: string) => {
        set({ payment })
      },
      setDate: (date: string) => {
        set({ date })
      },
      setPhone: (phone: string) => {
        set({ phone })
      },
      setWinCondition: (winCondition: string) => {
        set({ winCondition })
      },
      setResponsible: (responsible: string) => {
        set({ responsible })
      },
      setPrimaryColor: (primaryColor: string) => {
        set({ primaryColor })
      },
      setBackgroundColor: (backgroundColor: string) => {
        set({ backgroundColor })
      },
      setTextColor: (textColor: string) => {
        set({ textColor })
      },
      setNumbersColor: (numbersColor: string) => {
        set({ numbersColor })
      }
    }),
    {
      name: 'raffle-storage'
    }
  )
)
