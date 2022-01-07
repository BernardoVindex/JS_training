// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const eseMiPrimo = number => {
  const result = number % 2
  const result2 = number / 2
  console.log(result, result2)
}

eseMiPrimo(4)