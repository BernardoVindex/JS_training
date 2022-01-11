// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const nameChecker = () => {
  return (/[A-z],+A/g.test())
            ? console.info('Este SI es un nombre válido')
            : console.info('Este NO es un nombre válido')
}

nameChecker("Jhonathan MirCha")