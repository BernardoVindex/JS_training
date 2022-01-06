// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromoEvaler = string => {
    if (string.length === 0) return console.warn('Debes escribir alguna cadena de caracteres')
    
    const theString = string.toLowerCase()

    if (theString === theString.split('').reverse().join('').toString()) {
        console.log(`La palabra ${string} es un palíndromo`)
    } else {
        console.log(`La palabra ${string} no es un palíndromo`)
    }


}

palindromoEvaler('-1')