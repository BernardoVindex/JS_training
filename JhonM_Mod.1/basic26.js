// 26) Programa una función que dado un arreglo 
// de números obtenga el promedio, 
// pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const prom = a => {
if (!a) return console.log (`No se ha ingresado ningún arreglo`)
if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
if (a[0] === 0) return console.log (`El valor ingresado es 0`)
if (/\D[-]/.test(a.join('')))  return console.log(`Solo se pueden ingresar números, se ingreso: ${a.join('').match(/\D/g)} `)

  debugger
    const calculator = a.reduce((accum, curVal) => {
      return accum + curVal
    }, 0)
  
    return console.log(`El promedio es de los valores del arreglo es: ${calculator / a.length}`)
  }
  
  prom([9,8,7,6,5,4,3,2,1,0])

  // Solucion J.M.

const promedio = (arr = undefined) => {
  if (a === undefined) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (arr.length === 0) return console.log('El arreglo está vacío')
  for (let num of arr) {
    if (typeof num !== 'number') return console.log(`El valor ${num} ingresado NO es un número`)
  }

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num
      if (index === arr.length - 1) {
        return console.log(`El prmedio de ${arr.join(" + ")} es ${total / arr.length}}`)
      }
    })
  )
}