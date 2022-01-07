// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

const repitter = function(msg, echo) {
  for (let i = 0; i < echo; i++) {
    console.log(msg)
  }
}

// repitter('perreo', 3)

// Opcion 2
const repitter2 = (string = '', echo = undefined) => {
  if (!string) return console.warn('No ingresaste alguna cadena de texto')
  if (!echo) return console.warn('No ingresaste el repetidor')
  if (echo === 0) return console.warn('No se puede repetir algo 0 veces, ja-ja ¬¬')
  if (Math.sign(echo) === -1) return console.warn('El número de repeticiones no puede ser negativo')

  for (let i = 1; i <= echo; i++) {
    console.info(`${string}, ${i}`)
  }

}

repitter('perreo', 3)
