// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

const repitter = function(msg, echo) {
  for (let i = 0; i < echo; i++) {
    console.log(msg)
  }
}

repitter('perreo', 3)

// Opcion 2
const repitter2 = (string = '', echo = undefined) => {
  if (!string) console.warn('No ingresaste alguna cadena de texto')
  if (!echo) console.warn('No ingresaste el repetidor')



}