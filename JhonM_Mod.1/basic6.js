// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const echos = (pharse, word) => {
    if (pharse === '') return console.warn('No has escrito ningún texto')
    if (word === '' ) return console.warn('Debes escribir una palabra para encontrar el número de coincidencias') 
    if (!pharse.includes(' ')) return console.warn('Por favor usa espacios para separar las palabras')
    if (word.includes(' ')) return console.warn('En este campo solo se puede haber una palara y no debe tener espacios')

    const parsedPrhase = pharse.split(' ')
    const collector = []
    console.log(parsedPrhase)

    for (let i = 0; i < parsedPrhase.length; i++) {
        if (parsedPrhase[i] === word) {
            collector.push(parsedPrhase[i])        
        }

        if (collector.length === 0) {
            return console.warn(`No hay coincidencias en tu texto con la palabra ${word}`)
        }
    }
    
    console.log(`En tu texto se repite la palabra "${word}" ${collector.length} veces`)
}

echos('pera pera en el peral', 'pera')