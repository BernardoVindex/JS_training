// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const blackFrayday = (price, desc) => {
  if (!price) return console.warn('No has escrito el precio del produto')
  if (!desc) return console.warn('No has escrito es descuento a aplicar')
  if  (typeof price !== 'number') return console.warn('Solo se pueden ingresar números')
  if  (typeof desc !== 'number') return console.warn('Solo se pueden ingresar números')
  
  return console.info(`Con el descuento a"$${price}" el precio queda en: $${price * ( 1 - (desc / 100))}`)
}

blackFrayday(1000,20)