// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const upAndDown = a => {
  if (!a) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (a[0] === 0) return console.log (`El valor ingresado es 0`)
  if (/\D[-]/.test(a.join('')))  return console.log(`Solo se pueden ingresar números, se ingreso: ${a.join('').match(/\D/g)} `)

  return cosole.log(`
  Arreglo asc: ${a.sort((a,b) => a - b)}
  Arreglo des: ${a.sort((a,b) => b - a)}
  `)
}

upAndDown([7,5,7,8,6])
