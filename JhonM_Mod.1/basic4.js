// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

const repitter = function(msg, echo) {
  for (let i = 0; i < echo; i++) {
    console.log(msg)
  }
}

repitter('perreo', 3)