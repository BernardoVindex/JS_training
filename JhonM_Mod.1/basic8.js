//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const seekAndDestroy = (input, patorn) => {
    if (!input) return console.warn('No has ingresado ninguna cadena de texto')
    if (!patorn) return console.warn('No has ingresado ningun patron para eliminar')
    if (input.length < patorn.length) return console.warn('La cadena de texto debe ser al menos igual de larga que el patron a buscar')
    
    const result = input.split(patorn).join('')
    
    if (result === input ) return console.warn('No se ha encontrado coinicidencias en la cadena de texto')
    console.log(result)
}

seekAndDestroy("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")