const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

export const formatDate = (date: Date | null) => {
  if (date == null) return ''
  const currentDate = new Date(date)
  const day = currentDate.getUTCDate()
  const month = months[currentDate.getUTCMonth()]
  const year = currentDate.getUTCFullYear()
  return `${day} de ${month} del ${year}`
}
