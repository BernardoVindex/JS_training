// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parOnon = number => {
  if (number === 0) return console.error('El 0 no es divisible')
  if (!number) return console.warn('No has ingreado ningún numero')
  if (typeof number !== 'number') return console.error('Solo puedes ingresar números')
 
  if ( number % 2 === 0) return console.log(`El número "${number}" es par`)
  console.log(`El número "${number}" es impar`)

}

parOnon(0)

// Solución J.M.

const numeroParImpart = (numero = undefined) => {
  if (numero === undefined) return console.warn('No ingresaste un número')
  if (typeof numero !== 'number') return console.error(`El valor ${numero} ingresado no es un número`)

  return ((numero % 2) === 0)
    ? console.info(`El número ${numero} es Par`)
    : console.info(`El número ${numero} es Impar`)
}