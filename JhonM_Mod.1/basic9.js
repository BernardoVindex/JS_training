// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randomFunction = (max, min) =>{
  return console.log(Math.floor(Math.random() * (max - min) + min))
} 

randomFunction(501, 600)

// Solucion J.M.

const aleatorio = () => {
  console.info(Math.round((Math.random() * 100 ) + 500 ))
}