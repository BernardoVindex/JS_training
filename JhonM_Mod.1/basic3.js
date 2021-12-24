// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const addCharact = function(string, separator) {
  const charChached = []
  const stringCached = []
    
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== separator) {
      charChached.push(string[i])  
    } else {
      stringCached.push(charChached.join(''))
      charChached.splice(0, charChached.length)
    }
    if (i == string.length-1) {
      stringCached.push(charChached.join(''))
    }

  } 
  return stringCached
}

console.log(addCharact('para poder mejorar en javascript', ' '))

// console.log(addCharact('abcde', 1))

const addCharact2 = (string = "", separator = undefined) => {
  return (
    (!string)
      ? console.warn('No ingresaste una cadena de texto')
      : (separator === undefined)
        ? console.warn('No ingresaste una cadena de texto')
        : console.info(string.split(separator))
  )
}