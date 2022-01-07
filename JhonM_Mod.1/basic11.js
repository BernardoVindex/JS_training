// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorFunction = number => {
  if (!number) return console.warn('Debes escribir algun número')
  if (number < 0) return console.warn('El número tiene que se mayor que 0')
  if (typeof number !== 'number') return console.warn('Solo se pueden ingresar números')

  let result = [1]

  for (let i = 1; i <= number; i ++) {
    result *= i
  }

  return console.log(`El factorial de ${number} es: ${result}`)
}

factorFunction(10)