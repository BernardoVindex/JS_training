// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true

const capicuaFunction = (input) => {
  if (!input) console.warn('No ingresate ningún numero')

  const inputConcat = input.toString()
  const revesedInput = inputConcat.split('').reverse().join('')

  if (inputConcat == revesedInput) {
    console.warn('El número ingresado en efecto es una capícua')
  } else {
    console.warn('El número ingresado no es una capícua')
  }
}

// capicuaFunction(2002)

// Solución J.M.

const capicua = (numero = 0) => {
  if (!numero) return console.warn('No ingresate un número')
  if (typeof numero !== 'number') return console.error(`El valor "${numero} ingresado NO es un número`)

  numero = numero.toString()
  let alReves = numero.split('').reverse().join('')

  return (numero === alReves)
    ? console.info(`Si es capícua, Número original: ${numero}, Número al revés: ${alReves}`)
    : console.info(`No es capícua, Número original: ${numero}, Número al revés: ${alReves}`)
}

capicua(19)
capicua({})
capicua(1991)