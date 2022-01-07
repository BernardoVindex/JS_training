// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parOnon = number => {
  if (!number) return console.warn('No has ingreado ningún numero')
  if (typeof number !== 'number') return console.warn('Solo puedes ingresar números')
 
  if ( number % 2 === 0) return console.log(`El número "${number}" es par`)
  console.log(`El número "${number}" es impart`)

}

parOnon(5)