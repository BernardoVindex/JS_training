// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const eseMiPrimo = number => {
  if (number === 0) return console.error('El 0 no es divisible')
  if (number === 1) return console.error('El 1 solo cumple una de las condiciones')
  if (!number) return console.warn('No has ingreado ningún numero')
  if (typeof number !== 'number') return console.error('Solo puedes ingresar números')

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return console.info(`El númro ${number} no es primo`)
    }
  }
  
  return console.info(`El númro ${number} SI es primo`)
}


// Solucion J.M.

const numeroPrimo = (numero = undefined) => {
  if (number === 0) return console.error('El 0 no es divisible')
  if (number === 1) return console.error('El 1 solo cumple una de las condiciones')
  if (typeof number !== 'number') return console.error('Solo puedes ingresar números')
  if (Math.sign(numero) === -1) return console.error('El número no puede ser negativo')

  let divisible = false

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true
      break
    }
  }

  return (divisible)
    ? console.log(`El número ${numero} No es primo`)
    : console.log(`El número ${numero} Si es primo`)
}