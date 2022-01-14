// 21) Programa una función que dado un array 
// numérico devuelve otro array con los números 
// elevados al cuadrado, pe. mi_funcion([1, 4, 5])
//  devolverá [1, 16, 25].

const sqrPack = a => {
  if (!a) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (a[0] === 0) return console.log (`El valor ingresado es 0`)
  if (/\D[-]/.test(a.join('')))  return console.log(`Solo se pueden ingresar números, se ingreso: ${a.join('').match(/\D/g)} `)

  const sqrResults = []

  a.forEach( i => {
   sqrResults.push(i**2)
  })
  
  return console.log(sqrResults)
}
  
sqrPack([1, -4, 5])

// Solucion J.M.

const devolverCuadrados = (arr = undefined) => {
  if (a === undefined) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (arr.length === 0) return console.log('El arreglo está vacío')
  for (let num of arr) {
    if (typeof num !== 'number') return console.log(`El valor ${num} ingresado NO es un número`)
  }

  const newArr = arr.map( el => el * el)

  return console.log(`
  El arrego original: ${arr}
  Arreglo elevado al cuadrado: ${newArr}
  `)

}