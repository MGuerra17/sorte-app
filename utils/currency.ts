export const formatCOP = (price: string) => {
  return Number(price)
    .toLocaleString('es-CO', {
      currency: 'COP',
      style: 'currency'
    })
    .split(',')[0]
}
