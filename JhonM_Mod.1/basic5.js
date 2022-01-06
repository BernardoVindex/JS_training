// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const reversify = string => {
    if (!string) { console.warn('No has escrito alguna cadena de texto') }

    console.log(string.split('').reverse().join(''))
}

reversify('Pedro pica papas')

