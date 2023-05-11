import { type MultiValue, type SingleValue } from 'react-select'

export interface SelectOption {
  value: string
  label: string
}

export type Options = MultiValue<SelectOption> | SingleValue<SelectOption>

export interface Raffle {
  title: string
  description: string
  price: string
  image: string
  payment: Options
  date: Date | null
  phone: string
  winCondition: string
  responsible: string
  backgroundColor: string
  primaryColor: string
  textColor: string
  numbersColor: string
  soldNumbers: string[]
}
