// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const tempSwap = (value, unit) => {
  if (unit = "C") {
    farenheit = (value * 9/5) + 32
    return console.log(`${value}°C equivale a ${farenheit}°F`)
  } else {
    celsius = (value − 32) * 5/9 
    return console.log(`${value}°C equivale a ${celsius}°F`)
  }

  
}

tempSwap(0 ,"C")