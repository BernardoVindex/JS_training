// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const howMuchFrom = (year, month, day) => {
  if (!year) return console.warn('No introdujiste el año')
  if (!month) return console.warn('No introdujiste el mes')
  if (!day) return console.warn('No introdujiste el día')
  if (typeof year !== 'number') return console.warn('El fomato para año es de cuatro números [xxxx]')
  if (typeof month !== 'number') return console.warn('El fomato para el mes es de dos números [del 0 al 11]')
  if (typeof day !== 'number') return console.warn('El fomato para el día es de 4 números [del 0 al 6]')
  if (year.toString().length !== 4) return console.warn('El formato correcto para año es de 4 números')
  if (/[0-11]/.test(month)) return console.warn('No introdujiste el año correctamente')
  if (/[0-7]/.test(day)) return console.warn('No introdujiste el año correctamente')
  if (Math.sign(year) === -1) return console.warn('FBI OPEN UP!!!')
  if (Math.sign(month) === -1) return console.warn('FBI OPEN UP!!!')
  if (Math.sign(day) === -1) return console.warn('FBI OPEN UP!!!')
  
  const today = Date.now()
  const d = new Date(year, month, day)
  const since =  today - d
  
  console.log(`Han pasado ${Math.floor(since / (3.1536e10))} años desde ${year}`)

}

howMuchFrom(1984,4,3)


