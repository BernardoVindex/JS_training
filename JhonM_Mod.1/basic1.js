// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const stringLength = (string) => {
    let lenght = string.length

    return lenght
}

characterCounter()

// Opcione2
const characterCounter2 = ( string = "" ) => {
  return (
    (!string) 
      ? console.warn('No ingresaste ninguna cadena')
      : console.info(`La cadena "${string}" tiene ${string.length} caracteres`)
  )
}

characterCounter2()
