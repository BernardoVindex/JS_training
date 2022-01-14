// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
// FAIL EXCERCISE

const emailValid = (email = "") => {
  if (!email) return console.log('No has escrito nungún nombre')
  if (typeof email !== "string") console.log(`El valor ${email} no es una cadena de texto`)

  let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

  return (expReg)
            ? console.log(`El nombre "${email}" SI es valido`)
            : console.log(`El nombre "${email}" NO es valido`)
}

emailValid('jonmircha@gmail.com')