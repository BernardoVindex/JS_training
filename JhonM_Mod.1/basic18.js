// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const alphabet = (input) => {
  if (!input) return console.warn('No has escrito ningún texto')
  if (typeof input !== 'string') return console.error('Se a ingresado algo distinto a una cadena de caracteres')

  const text = input.replace(/ /g,'')
  const voc = []
  const con = []

  for (let i = 0; i < text.length; i++) {
    (/(a|e|\i|o|u)/ig.test(text[i]))
      ? voc.push(text[i])
      : con.push(text[i])
  }

  console.log(`
  El texto "${input}" contiene:
  "${voc.length}" vocales y 
  "${con.length}" consonantes
  `)
}

alphabet('a ver si sirve')


// Con RegExp


const vocalizer = (input) => {
  const voc = /[aeiou]/ig
  const con = /[^aeiou\s]/ig
  
  return console.info(`
  El texto "${input}" contiene:
  "${input.match(voc).length}" vocales y 
  "${input.match(con).length}" consonantes
  `)
}

vocalizer('a ver si sirve')

// Número de vocales: 34