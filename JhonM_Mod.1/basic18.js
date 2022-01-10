// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const alphabetRegEX = (input) => {
  const text = input.replace(/ /g,'')
  
  const voc = /(\a|\e|\i|\o|\u|)/g
  const con = []

  return console.info(`El texto ${input} tiene ${con} vocales`)
}




// alphabetRegEx('a ver si sirve')

// const alphabet = (input) => {
//   const text = input.replace(/ /g,'')

//   const voc = []
//   const con = []

//   for (let i = 0; i < text.length; i++) {
//     if(text[i] === 'a') {
//       voc.push(text[i])
//     } else {
//       con.push(text[i])
//     }
//   }

//   console.log(voc)
//   console.log(c)
// }


const alphabet = (input) => {
  const text = input.replace(/ /g,'')

  const voc = []
  const con = []

  for (let i = 0; i < text.length; i++) {
    (text[i].test(/(a|e|\i|o|u)/))
      ? voc.push(text[i])
      : con.push(text[i])
  }

  console.log(voc)
  console.log(c)
}

alphabet('a ver si sirve')