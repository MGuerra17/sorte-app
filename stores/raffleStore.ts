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
  setPrimaryColor: (primaryColor: string) => void
  setSecondaryColor: (secondaryColor: string) => void
  setTextColor: (textColor: string) => void
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
      primaryColor: 'bg-red-600',
      secondaryColor: 'bg-blue-700',
      textColor: 'bg-black',
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
      setSecondaryColor: (secondaryColor: string) => {
        set({ secondaryColor })
      },
      setTextColor: (textColor: string) => {
        set({ textColor })
      }
    }),
    {
      name: 'raffle-storage'
    }
  )
)
