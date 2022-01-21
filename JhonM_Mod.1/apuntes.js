// ASINCRONSIMO

/*
1.1  SetTimeout() & SetInterval()

  SetTimeout()
    Encapsula un código haciendo que su ejecuión no inicie hasta pasado
    el tiempo indicado en el segundo parámetro de la función

  setTimeout(() => {
    //código 
  }, //tiempo en ms)

  ej:
  setTimeout(() => {
    console.log(''Ejecutando un setTimeout)
  },3000)


  setInerval()
    Encapsula un determinado código y lo ejecutará de forma indefinia, el
    espacio de tiempo entre ejecuciones ser coloca en el segundo parámetro
    de la función

  setInerval(() => {
    // código
  }, //tiempo en ms)

  ej:
  setInterval(() => {
    console.log(new Date.toLocaleTimeString())
  },1000)


  clearTimeout()
    Esta función cancela la ejecución de un setTimeout(), sin embargo el
    setTimeout() debe estar en una variables para que esto ocurra

  ej:
  let temporizador = setTimeout(() => {
    console.log(new Date.toLocaleTimeString())
  }, 1000)

  clearTimeout(temporizador)

  Lo mismo funciona para setInterval
  
  ej:
  let temporizador = setInterval(() => {
    console.log(new Date.toLocaleTimeString())
  }, 1000)

  clearTimeout(temporizador)
*/


/*
1.2  Callbacks
  Una función de callback es una función que se pasa a otra función como 
  un argumento, que luego se invoca dentro de la función externa para 
  completar algún tipo de rutina o acción.

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value*value)
  }, 0 | Math.random() * 1000)
}

cuadradoCallback(0, (value, result)=> {
  console.log('Inicia Callback')
  console.log(`Callback: ${value}, ${result}`)
  cuadradoCallback(1, (value, result)=> {
    console.log(`Callback: ${value}, ${result}`)
    cuadradoCallback(2, (value, result)=> {
      console.log(`Callback: ${value}, ${result}`)
      cuadradoCallback(3, (value, result)=> {
        console.log(`Callback: ${value}, ${result}`)
      })
    })
  })
})

*/

/*
1.3 Promesas
 Trabajan con dos recursos "resolve" y "reject"
  Resolve:
    Sería el flujo normal de código, para ello tambien se apoya del
    método ".then()", el cual resive otra funcion para continuar con 
    la rutina de ejecución del código
  
  Reject:
    En caso de que el código presente algún error, en las validaciones
    hacemos uso del método Reject para manejar los errores. Este método
    solo se declara una vez y este se encarga de manejar el error 
    en donde sea que se se encuentre dentro de la rutina de ejecución

 function cuadradoPromise() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
      resolve({
        value,
        result: value * value
      })
  }, 0 | Math.random() * 1000)
   })
}



function cuadradoPromise(value) {
  if (typeof value !== 'number') {
    return Promise.reject(`Error, el valor ${value} no es un numero`)
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve({
       value,
       result: value * value
     })
 }, 0 | Math.random() * 1000)
  })
}

cuadradoPromise(0)
  .then(( obj ) => {
    console.log('Inicia Promise')
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(1)
  })
  .then(( obj ) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(2)
  })
  .then(( obj ) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(3)
  })
  .then(( obj ) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(4)
  })
  .then(( obj ) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(5)
  })
  .then(( obj ) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    console.log('End Promise')
  })
  .catch(err => console.error(err))

  */

  /* 1.4 Async/Await
    Funciones que espera a que algo se cumpla para continuar con la 
    rutina de ejecución

    Al declara una funcion utilizamos la palabra reservada "await" para
    indicarle a JS que hay procesos que requieren de ser resueltos antes
    de continuar con la ejecución del código. Este metodo solo será válido
    cuando una funcion es declarada con el parámetro "async"
   

  
function cuadradoPromise(value) {
  if (typeof value !== 'number') {
    return Promise.reject(`Error, el valor ${value} no es un numero`)
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve({
       value,
       result: value * value
     })
 }, 0 | Math.random() * 1000)
  })
}

async function functionAsyncronaDeclarada() {
  try {
    console.log('Inicio de Azync Func')
    let obj = await cuadradoPromise(0)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(1)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(2)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(3)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(4)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(5)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)
  } catch (err) {
    console.error(err)
  }
}

functionAsyncronaDeclarada()

const functionAsincronaExpresada = async () => {
  try {
    console.log('Inicio de Azync Func')
    let obj = await cuadradoPromise(6)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(7)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(8)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(9)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(10)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(11)
    console.log(`Azyn Function: ${obj.value}, ${obj.result}`)
  } catch (err) {
    console.error(err)
  }
}

functionAsincronaExpresada()
 */


 /* 1.5 Symbol
 Nos permite crear identficadores 'unicos' o identificadores de
 referencia. Son muy útiles para declarar propiedades privadas
 dentro de Objetos

 ej:
 let id = "hola"
 let id2 = "hola"

 console.log(id === id2) //true

 let id = Symbol("id")
 let id2 = Symbol("id2")

 console.log(id === id2) //false

 Agregando simbolos a objetos

 const NAME = Symbol()

 const persona = {
   [NAME] :
 }
  */


 /* 1.6 Set
  Es una estructura de datos, similar al array, pero que contiene
  datos primitivos únicos.
     
  const set = new Set([1,2,3,3,4,5,6,false,false,{},{}, "hola","Hola"])
  console.log(set)
  console.log(set.size) // Semejante al método .length

  const set2 = new Set() // Agregando datos al objeto set
  set2.add(1)
  set2.add(2)
  set2.add(2)
  set2.add(3)
  set2.add(true)
  set2.add(false)
  set2.add(true)
  set2.add({})
  console.log(set2)

  Solo algunos de los metodos que podemos usar con los array, son validos
  para los objetos Set. Lo que podemos realizar es utilizar el metodo .from()
  combirtiendo el objeto Set a un Array con el que podamos tabajar

  let arr = Array.from(set)
  console.log(arr[9])

  //Metodo para eliminar valores
  set.delete('Hola')
  console.log(set)

  //Metodo para comprobar que existe un valor en el Set
  console.log(set.has("hola"))

  // Metodo para limpiar un Set por completo
  set2.clear()
  console.log(set2)
*/


/* 1.7 Maps
Son objetos útiles para almacenar valores asociados

let mapa = new Map()

// Introducionedo valores
mapa.set("nombre", "Bernardo")
mapa.set('apellido', 'Cardenas')
mapa.set('edad','37')

console.log(mapa)
console.log(mapa.size) // Imprime el número de valores
 
// para buscar algún valor
console.log(mapa.has('correo')) // imprime false
console.log(mapa.has('nombre')) // imprime true 

// Para obtener valores
console.log(mapa.get('nombre')) 

// Sobrescribir el valor
mapa.set('nombre','El refas') 
console.log(mapa.get('nombre')) 

// Para eliminar una propiedad
mapa.delete('apellido')
console.log(mapa)


for (let [key,value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`)
}

/* 
  Una diferncia esntre los Maps y los objetos, es que para 
  declarar las key, en los objetos solo se aceptan strings, 
  mientras que los Maps aceptan otros tipos de datos para
  declara las keys.

  Sin embargo esto puedes ser un muy mala práctica


mapa.set(19, 'diseinueve')
mapa.set(false, 'falso')
mapa.set({}, {})
console.log(mapa)

// Segunda manera para inicializar valores
const mapa2 = new Map([
  ['nombre','horus'],
  ['edad',7],
  ['animal', 'halcon'],
])

console.log(mapa2)

const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

console.log(llavesMapa2)
console.log(valoresMapa2)
*/


/* 1.8 Iterables & iterators
  Son características que tienes los tipos de datos en JS

  Iterables: Elemento al que se puede recorer su contenido
  Iterador: Mecanismo que recorre el elmento en cuestión 

  const iterableArr = [1,2,3,4,5]
  const iterableStr = 'Hola iteador'
  const iterableSet = new Set([1,2,3,5,6,7])
  const iterableMap = new Map([['Pero', 'Lucky'], ['edad', '16']])

  // Accedemos al iteradr del iterable
  const iterador = iterable[Symbol.iterator]()

  console.log(iterable)
  console.log(iterador) // Imprime Object [Array Iterator] {}
  
  console.log(iterador.next())
  console.log(iterador.next())
  console.log(iterador.next())
  console.log(iterador.next())
  console.log(iterador.next())
  console.log(iterador.next())
  
  imprime lo siuginete la interfaz 
  { value: 1, done: false }
  { value: 2, done: false }
  { value: 3, done: false }
  { value: 4, done: false }
  { value: 5, done: false }
  { value: undefined, done: true }

  // Iterando con un ciclo

  let next = iterador.next()

  while (!next.done) {
    console.log(next.value)
    next = iterador.next()
  }

*/

/* 1.9 Generadores 
  Azúcar sintáctico para manejar con funciones a los iteradores.
  Consigue voler el código de una función en iterable


function* iterable() {
  yield 'hola'
  console.log('Hola consola')
  yield 'hola 2'
  console.log('Sguimo con más instrucciones de nuestro código')
  yield 'hola 3'
  yield 'hola 4'
}

let iterador = iterable()

// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())


for (let y of iterador) {
  console.log(y)
}

const arr = [...iterable()]
console.log(arr)

*/

/* 1.10 Proxies
  Permite craer objetos basdo en un objeto literal inicial. El proxy
  mantien un vinculo con el objeto original, por lo que cualquier
  modificación hacia alguno de estos dos, se verá reflejada en el 
  otro


const persona = {
  nombre:'',
  apellido:'',
  edad: 0
}

const manejador = {
  set(obj, props, values) {
    if(Object.keys(obj).indexOf(props) === -1) {
      return console.error(`La propiedad "${props}" no existe en el objeto persona`)
    }
    // Esta validación evita que se agrege una nueva propiedad que no haya sido
    // declararda con anterioridad

    if (
      (props === 'nombre' || props === 'apellido') && 
      !(/^[A-zÑñÁáÉéÍíÓóÚúÜü\s]/g.test(valor))
    ) {
      return console.error(`La propiedad "${props}" solo acepta letras y espacios en blanco`)
    }

    obj[props] = values
  }
}

const ber = new Proxy(persona, manejador)
ber.nombre = 'Bernardo'
ber.apellido = 'Cardenas'
ber.edad = 27

console.log(ber)

// Agrgar un atributo nuevo
ber.altura = 175
console.log(ber)
console.log(persona)
*/

/*  1.11 Propiedades dinámicas de los Objetos (Compue properties)
  Tiene gran utilidad para cargar información en un objeto de forma 
  dinámica


const objUsuarios = {
  [`id_${Math.round(Math.random() * 100 + 5)}`]: 'Valor aleatori'
}
const usuarios = ['Jhon','Bernardo', 'Miriam', 'Jorge']

usuarios.forEach((usuario, index) => {
  objUsuarios[`id-${index}`] = usuario
})

console.log(objUsuarios)
// imprime
// {
//   id_39: 'Valor aleatori',
//   'id-0': 'Jhon',
//   'id-1': 'Bernardo',
//   'id-2': 'Miriam',
//   'id-3': 'Jorge'
// }
*/

/* 1.14 Call, bind applay

console.log(this)
this.lugar = 'Contexto Global'

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde ${this.lugar}`)
}

saludar()

const obj = {
  lugar: 'Contexto Objeto'
}

saludar.call(obj, 'Hola', 'Ber')
saludar.apply(obj, ['Hola','Ber'])

const persona = {
  nombre: 'Ber',
  saludar: function() {
    console.log(`Hola ${this.nombre}`)
  }
}

persona.saludar()

const otraPersona = {
  saludar: persona.saludar.bind(persona)
}

otraPersona.saludar()
*/

/** 2.0 Web API´s
   DOM: Document Object Model
   BOM: Browser Object Model
   CSSOM: CSS Object Model
  
   Web API´s: 
     -Eventos
     -Forms
     -History
     -Web Storage
     -Geolocation
     -Drag & Drop
     -Indexed DB
     -Canvas
     -MatchMedia
     etc...
 */
