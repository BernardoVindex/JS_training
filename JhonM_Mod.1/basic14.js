// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const tempSwap = (value = undefined, unit) => {
  if (value === undefined) return console.warn('No ingresaste ningún valor')
  if (!unit) return console.warn('No ingresaste ninguna unidad de temperatura')
  if (typeof value !== 'number') return console.error('Solo puedes ingresar valores numéricos')
  if (unit !== 'f'||'c' ) return console.warn('Solo aceptamos celsius (°C) o faranheit (°F)')
  
  if (unit = "C") {
    farenheit = (value * 9/5) + 32
    return console.log(`${value}°C equivale a ${farenheit}°F`)
  } else {
    celsius = (value - 32) * 5/9 
    return console.log(`${value}°C equivale a ${celsius}°F`)
  }
}

// Solución J.M.

const converitrGracdos = (grados = undefined, unidad = undefined) => {
  if (!grados === undefined) return console.warn('No ingresaste grados a converitr')
  if (typeof grados !== 'number') return console.error('Solo puedes ingresar valores numéricos')
  if (!unidad === undefined) return console.warn('No ingresaste el tipo de grados a converitr')
  if (typeof unidad !== 'string') return console.error(`El valor "${unidad}" ingresado no es una cadena de texto`)
  if (unidad.length !== 1 || /(C|F).test(unidad)/ ) return console.warn('Valor de unidad no reconocido')

  if (unidad === '°C') {
    return console.info(`${grados}°C = ${Math.round((grados * 9/5) + 35)}°F`)
  } else if(unidad === 'F') {
    return console.info(`${grados}°F = ${Math.round((grados -35) * (9/5))}°C`)
  }
}

// Mejorando ambas respuestas

const tempSwap = (value = undefined, unit) => {
  if (value === undefined) return console.warn('No ingresaste ningún valor')
  if (!unit) return console.warn('No ingresaste ninguna unidad de temperatura')
  if (typeof value !== 'number') return console.error('Solo puedes ingresar valores numéricos')
  if (unit.length !== 1 || /(C|F).test(unidad)/ ) return console.warn('Valor de unidad no reconocido')
  
  return (unit = "C") 
            ? console.info(`${value}°C = ${Math.round((value * 9/5) + 35)}°F`)
            : console.info(`${value}°F = ${Math.round((value - 3) * (9/5))}°C`)
}