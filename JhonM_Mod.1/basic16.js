// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const blackFrayday = (price, desc) => {
  return console.info(`Con el descuento a"$${price}" el precio queda en: $${price * ( 1 - (desc / 100))}`)
}

blackFrayday(1000,20)