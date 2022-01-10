// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const binaryToDecimal = (number, mode) => {
  if (!number) return console.warn('No has escrito ningún número')
  if (!mode) return console.warn('EL tipo de número que es (decimál: 10 o binario: 2)')
  
  
  return (mode === 10)
            ? console.info(`El número decimál "${number}" en base binaria es: ${number.toString(2)}`)
            : console.info(`EL dígito binario "${number}" en base decimal es: ${parseInt(number, 2)}`)
}


// A short way

const towToTen = (digit, mode) => {
  if (!digit) return console.warn('No has escrito ningún número')
  if (!mode) return console.warn('EL tipo de número que es (decimál: 10 o binario: 2)')
  
  const digitS = digit.toString()
  const dataCollect = []

  if (mode === 2) {
    for (let i = 0; i < digitS.length; i++) {
      dataCollect.push(digitS[i] * 2 ^ (digitS.length - 1))
    }
  } else {
    
    for (let i = 0; i < digitS.length; i++) {
      dataCollect.push(digitS[i] % 2)
    }
  }

  return (mode === 2)
          ? console.info(`El número binario "${digit}" en base decimal es: ${dataCollect.reduce((a,b) => a + b, 0)}`)
          : console.info(`El número decimál "${digit}" en base binaria es: ${dataCollect.reverse().join('')}`)

}

towToTen(100, 2)


[1, 0, 0]



4 % 2 = 0
2 % 2 = 0
1 % 2 = 1
