// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const binaryToDecimal = (number, mode) => {
  if (!number) return console.warn('No has escrito ningún número')
  if (!mode) return console.warn('EL tipo de número que es (decimál: 10 o binario: 2)')
  
  
  return (mode === 10)
            ? console.info(`El número decimál "${number}" en base binaria es: ${number.toString(2)}`)
            : console.info(`EL dígito binario "${number}" en base decimal es: ${parseInt(number, 2)}`)
}

binaryToDecimal(4, 10)
