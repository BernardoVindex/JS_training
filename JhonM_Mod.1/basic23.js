// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const parNonReloaded = a => {
  if (!a) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (a[0] === 0) return console.log (`El valor ingresado es 0`)
  if (/\D[-]/.test(a.join('')))  return console.log(`Solo se pueden ingresar números, se ingreso: ${a.join('').match(/\D/g)} `)
  
  const par = []
  const non = []

  a.forEach( i => {
      (i % 2 === 0)
          ? par.push(i)
          : non.push(i)
  })

  return console.log(`
  Arreglos con pares: ${par}
  Arreglos con nones: ${non}
  `)
}

parNonReloaded([1,2,3,4,5,6,7,8,9,0])


const separarParesImpares = (arr = undefined) => {
  if (a === undefined) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (arr.length === 0) return console.log('El arreglo está vacío')
  for (let num of arr) {
    if (typeof num !== 'number') return console.log(`El valor ${num} ingresado NO es un número`)
  }

  return console.info({
    pares: arr.filter(num => num % 2 === 0),
    impares: arr.filter(num => num % 2 === 1)
  }) 
}