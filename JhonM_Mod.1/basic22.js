// 22) Programa una función que dado un array devuelva el 
// número mas alto y el más bajo de dicho array, 
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


const smallAndBigger = a => {
  if (!a) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (a[0] === 0) return console.log (`El valor ingresado es 0`)
  if (/\D[-]/.test(a.join('')))  return console.log(`Solo se pueden ingresar números, se ingreso: ${a.join('').match(/\D/g)} `)

  const sortedArray = a.sort((a,b) => a - b)
    
  return console.log(`
  Valores del arreglo: ${sortedArray}
  
  Valor más pequeño: ${sortedArray[0]}
  Valor más grande : ${sortedArray[sortedArray.length - 1]}
  `)
}
  
smallAndBigger([1, 4, 5, 99, -60])

// Solucion J.M.

const arrayMinMax = (arr = undefined) => {
  if (a === undefined) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (arr.length === 0) return console.log('El arreglo está vacío')
  for (let num of arr) {
    if (typeof num !== 'number') return console.log(`El valor ${num} ingresado NO es un número`)
  }

  return console.log(`
  Arreglo original: ${arr}
  
  Valor mayor: ${Math.max(...arr)}
  Valor mayor: ${Math.min(...arr)}
  `)
}