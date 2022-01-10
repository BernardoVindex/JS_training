// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const howMuchFrom = ( year, month, day) => {
  const today = Date.now()
  const d = new Date(year, month, day)
  
  const since = today - d
  console.log(today)
  console.log(d.toDateString())
  console.log(since)

  const today = Date.now()
  const d = new Date(year, month, day)
}

howMuchFrom(1984,4,3)
