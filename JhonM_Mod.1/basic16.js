// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const blackFrayday = (price, desc) => {
  if (!price) return console.warn('No has escrito el precio del produto')
  if (!desc) return console.warn('No has escrito es descuento a aplicar')
  if  (typeof price !== 'number') return console.warn('Solo se pueden ingresar números')
  if  (typeof desc !== 'number') return console.warn('Solo se pueden ingresar números')
  
  return console.info(`Con el descuento a"$${price}" el precio queda en: $${price * ( 1 - (desc / 100))}`)
}

blackFrayday(1000,20)

// Solucion J.M.

const aplicarDescunto = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn('No has escrito el precio del produto')
  if  (typeof monto !== 'number') return console.warn('Solo se pueden ingresar números')
  if (monto === 0) return console.error('EL monto no puede ser cero')
  if (Math.sign(monto) === -1) return console.error('El monto no puede ser negativo')
  if (descuento === 0) return console.error('EL descuento no puede ser cero')
  if (Math.sign(descuento) === -1) return console.error('El descuento no puede ser negativo')

  return console.ingo(`$${monto} -${descuento}% = $${monto - ((monto * descuento) / 100)}`)
}