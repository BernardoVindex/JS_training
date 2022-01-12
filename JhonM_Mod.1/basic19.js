// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const nameChecker = name => {
  if (!name) return console.log('No has escrito nungún nombre')
  if (/\d/g.test(name)) return console.warn(`EL nombre no puede llevar números: "${name.match(/\d/g)}"`)
  if (/[^A-z\s]/g.test(name)) return console.warn(`EL nombre no puede llevar caracteres espacielas: "${name.match(/[^A-z\s]/g)}"`)
  if (!/\s+/.test(name)) return console.warn(`Separa el nombre del apellido con un espacio`)
  if (/^[a-z]/g.test(name)) return console.warn(`Nombre y apellido deben empezar con mayúscula`)
  if (/\s(?=[a-z])/g.test(name)) return console.warn(`Nombre y apellido deben empezar con mayúscula`)
  
  console.log(`El nombre ${name} es valido`)
}

nameChecker("Jhonathan mirCha")

// Solucion J.M.

const  validarNombre = (nombre = "") => {
  if (!nombre) return console.log('No has escrito nungún nombre')
  if (typeof nombre !== "string") console.log(`El valor ${nombre} no es una cadena de texto`)

  let expReg = /^[A-zÑñÁÉÍÓÚÜáéíóúü\s]+$/g.test(nombre)

  return (expReg)
            ? console.log(`El nombre "${nombre}" SI es valido`)
            : console.log(`El nombre "${nombre}" NO es valido`)
}
