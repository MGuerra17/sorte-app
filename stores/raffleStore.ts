import { create } from 'zustand'
import { type Options, type Raffle } from '@/interfaces/Raffle'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { persist } from 'zustand/middleware'
import { initialState } from '@/utils/globalState'

interface RaffleActions {
  setTitle: (title: string) => void
  setDescription: (description: string) => void
  setPrice: (price: string) => void
  setImage: (image: string) => void
  setDate: (date: Date | null) => void
  setPhone: (phone: string) => void
  setWinCondition: (winCondition: string) => void
  setResponsible: (responsible: string) => void
  setPayment: (payment: Options) => void
  setBackgroundColor: (backgroundColor: string) => void
  setPrimaryColor: (primaryColor: string) => void
  setTextColor: (textColor: string) => void
  setNumbersColor: (numbersColor: string) => void
  addSoldNumber: (number: string) => void
  removeSoldNumber: (number: string) => void
  resetState: () => void
}

export const useRaffleStore = create<Raffle & RaffleActions>()(
  persist(
    (set) => ({
      ...initialState,
      setTitle: (title: string) => {
        set({ title })
      },
      setDescription: (description: string) => {
        set({ description })
      },
      setPrice: (price: string) => {
        if (price.length > 9) return
        set({ price })
      },
      setImage: (image: string) => {
        set({ image })
      },
      setDate: (date: Date | null) => {
        set({ date })
      },
      setPhone: (phone: string) => {
        if (phone.length > 10) return
        set({ phone })
      },
      setWinCondition: (winCondition: string) => {
        set({ winCondition })
      },
      setResponsible: (responsible: string) => {
        set({ responsible })
      },
      setPayment: (payment: Options) => {
        set({ payment })
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
      },
      addSoldNumber: (number: string) => {
        set((state) => ({ soldNumbers: [...state.soldNumbers, number] }))
      },
      removeSoldNumber: (number: string) => {
        set((state) => ({
          soldNumbers: state.soldNumbers.filter((n) => n !== number)
        }))
      },
      resetState: () => {
        set({ ...initialState, soldNumbers: [] })
      }
    }),
    {
      name: 'raffle-store'
    }
  )
)

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useRaffleStore)
}
