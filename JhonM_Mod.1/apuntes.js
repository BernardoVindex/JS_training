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

/** 3.0 Introducción DOM
  Elementos del dom
  
  console.log(window.document) //Impire el 'document'
  console.log(document) //Impire el 'document'
  console.log(document.head) //Impire el 'head' o la cabezera del doc. html
  console.log(document.body) //Impire el 'body' del html
  console.log(document.documentElement) //Impire la etiqueta del html
  console.log(document.charset) //Impire el paquete de caracteres que usa (UTF-8)
  console.log(document.title) //Impire el el contenido de la etiqueta title
  console.log(document.links) //Impire todos los enlaces que tiene, Aunque parece no es un array
  console.log(document.forms) //Impire los formularios que tenga
  console.log(document.images) //Impire las imágenes que tenga
  console.log(document.styleSheets) //Impire las hoja de estilo
  console.log(document.scripts) //Impire los scripts
  console.log(document.getSelection.toString()) //Impire el elemento subrayado en el DOM
*/ 

/* 3.1  DOM: Nodos, Elementos y Selectores
Tipos de nodo ''var type = node.nodeType;

Node.ELEMENT_NODE (1)
An Element node like <p> or <div>.

Node.ATTRIBUTE_NODE (2)
An Attribute of an Element.

Node.TEXT_NODE (3)
The actual Text inside an Element or Attr.

Node.CDATA_SECTION_NODE(4)
A CDATASection, such as <!CDATA[[ … ]]>

Node.PROCESSING_INSTRUCTION_NODE (7)
A ProcessingInstruction of an XML document, such as <?xml-stylesheet … ?>.

Node.COMMENT_NODE (8)
A Comment node, such as <!-- … -->.

Node.DOCUMENT_NODE (9)
A Document node.

Node.DOCUMENT_TYPE_NODE (10)
A DocumentType node, such as <!DOCTYPE html>.

Node.DOCUMENT_FRAGMENT_NODE (11)
A DocumentFragment node.
 

console.log(document.querySelector('#menu'))
//Solo trae el primer selector que hayas especificado

console.log(document.querySelectorAll('#menu'))
//Trae todos los selectores que hayas especificado
  
console.log(document.querySelectorAll("a").forEach((el) => console.log(el)))
// Imprime de iterativamente todos los elementos tipo anchor

console.log(document.querySelectorAll(".card")[2])
// Imprime la tarjeta con el no. de índice 2 (el trecer elemento con la etiqueta card)

console.log(document.querySelectorAll("#menu.li"))
// Imprime las listas que estén dentro del id menú
*/

/* 3.2  DOM: Atributos y Data-Attributes 
    Para crear alguna tributo "data" hay dos convenciones;
      1 Empezar con la palabra "data-"
      2 Que sea en inglés la segunda palabra

    <a className="link" href="/" data-description="Eso es editable"></a>

// Primera forma para llamar o modificar atributos
console.log(document.documentElement.lang) // Imprime "es"
// Para acceder al atributo 'lang' del html

console.log(document.documentElement.getAttribute("lang")) // Imprime "es"

console.log(document.documentElement.getAttribute("lang")) // Imprime "es"

console.log(document.querySelector(".link-dom").href) // Imprime el link del elemento con la eltiqueta ".link-dom"

console.log(document.querySelector(".link-dom").getAttribute("href")) // Imprime el valor del elemento con la eltiqueta ".link-dom"


// Modifica el atributo "lang" del html
//1.-
document.documentElement.lang = "en"

//2.-
document.documentElement.setAttribute("lang", "es-MX")

// Como convención es recomendable guardar los elementos del DOM de la siguinete manera, en constantes y con un símbolo "$" al inicio
const $elementoDOM = document.querySelector(".link-DOM")

$linkDOM.setAttribute("target", "_blanck")
*/

/* 3.3 DOM: Etiilos Variables 

// Se accede a las propiedades válidas de CSS
console.log($linkDOM.style) 
// Se accede a las propiedades CSS específicas
console.log($linkDOM.style.backgrounColor) 

// Accede a los estilos por defecto que coloca el navegador
console.log(window.getComputedStyle($linkDOM.style)) 
console.log(getComputedStyle($linkDOM.style).getPropertyValue("color"))

// Establecer valores
$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")
// O bien
$linkDOM.style.width = "50%"
$linkDOM.style.textAlign = "center"
*/

/* 3.4 . DOM: Clases CSS

const $card = document.querySelector(".card")

console.log($card.className)
console.log($card.classList) // Imprime un DOM TOKEN list con sus valores
console.log($card.classList.contains("rotate-45")) // Imprime un boolean 
$card.classList.add("rotate-45") // Agrega un valor al elemento
$card.classList.remove("rotate-45") // Elimina un valor al elemento
// toggle: Funcina como un accinador de estado, si lo tiene, al aplicar el método se lo quita y viceverza
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45", "rotate-85") // Cambia un valor por otro

// Se pueden agregar volore de manera simultanea
$card.classList.add("rotate-45", "sepia", "transparent")
$card.classList.remove("rotate-45", "sepia", "transparent") 
$card.classList.toggle("rotate-45" , "sepia", "transparent")
*/

/*  3.5 DOM: Texto y HTML

const $whatIsDOM = document.getElementById("que-es")

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
  <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>  
`
$whatIsDOM.innerText = text // Renderiza tal cual vien en las variable con las template strings
$whatIsDOM.textContent = text // Renderiza el contenido de la variable sin respetar las template strings
$whatIsDOM.innerHTML= text // Va a interpretar las etiquetas de marcado
$whatIsDOM.otherText = text //
*/

/* 3.6 DOM Traversing: Recorriendo el DOM 
  Es una serie de propiedades de la API del navegador que nos permite recorrer los nodos de tipo elmentos

const $cards = document.querySelector(".cards")

console.log($cards) // Imprime el elmento con la clase card
console.log($cards.children) // Imprime en un arrelgo los hijos del elmento con la clase card
console.log($cards.children[2]) // Imprime el tercer hijo del elmento con la clase card
console.log($cards.parentElement) // Imprime el elmento padre
console.log($cards.firstElementChild)
*/

/* 3.7 DOM: Creando Elementos y Fragmentos

const $figure = document.createElement("figure")
const $img = document.createElement("img")
const $ficaption = document.createElement("ficaption")
const $ficaptionText = document.createTextNode("Animals")
const $cards = document.createElement(".cards")

$cards.appendChild($figure)
*/

/* 3.8 DOM: Templates HTML
Etiqueta <template> que no se visualiza en el DOM 

<template>
  <figure class='card'>
    <img>
    <figcaption></figcaption>
  </figure>
</template> 

const $cards = document.querySelector(".cards")
const $template = document.getElementById("template-card").content
const $fragment = document.createDocumentFragment()
const cardContent = [
  {
    title: 'Teconolgía',
    img: "https://placeimg.com/200/200/tech"
  },
  {
    title: 'Animals',
    img: "https://placeimg.com/200/200/animals"
  },
  {
    title: 'Gente',
    img: "https://placeimg.com/200/200/people"
  }
]

cardContent.forEach( elemento => {
  $template.querySelector("img").setAttribute('src', elemento.img)
  $template.querySelector("img").setAttribute('alt', elemento.title)
  $template.querySelector("figcaption").textContent = elemento.title

  let $clone = document.importNode($template, true)
  $fragment.appendChild($clone)
})

$cards.appendChild($fragment)
*/

/* 3.9 DOM: Modificando Elementos

const $cards = document.querySelector(".cards")
const $newCard = document.createElement('figure')
const $cloneCards =  $cards.cloneNode(true)

$newCard.innerHTML = `
  <img src='http://placeimg.com/200/200/any' alt='Any'
  <figcaption>Any</figcaption>
`
$newCards.classList.add('card')

$cards.replaceChild($newCard, $cards.children[2]) 
// Agrega al final del nodo seleccionado

$cards.insertBefore($newCard, $cards.firstElementChild)
// Inserta sin remplazar

$cards.removeChild($cards.lastElementChild)
// Elimina el último nodo de tipo elmento


// Metodos nuevos //
.insertAdjacentElement(position, element) hace referencia a un nodo de tipo elemento (etiqueta html)
.insertAdjacentHTML(position, html) texto en formato html
.insertAdjacentText(position, text) text

// Position:
  // beforebegin
  // beforeend
  // afterbegin
  // afterend
  
const $cards = document.querySelector(".cards")
const $newCard = document.createElement('figure')

$newCard.innerHTML = `
  <img src='http://placeimg.com/200/200/any' alt='Any'
  <figcaption>Any</figcaption>
`
$newCards.classList.add('card')

$newCard.insertAdjacentElement('beforebegin', $newCard)
$newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any')
$cards.insertAdjacentElement('afterbegin', $newCard)

$cards.prepend($newCard) // Agrega al primer hijo
$cards.before($newCard) // Agrega como hermano anterior
$cards.append($newCard // Agrega como último hijo
$cards.after($newCard) // Agregar como hermnao posterior
*/

/* 3.10 DOM: Manejadores de Evento
 Caulquier función que se ejecut como evento, solo puede recibir
 como parámetro el evento (e)
//Fomras de desencadenar un evento
// 1.- Evento como atributo dentro de una etiqueta HTML 
  // En el archivo html
  <button onClick="holaMundo()">Evento como atributo</button>
  
  // En el archivo JS: Funcion de manejador de eventos
  function holaMundo() {
    alert('Hola Mundo')
  }

//2.- Como manejado de eventos
  // En el archivo html
  <button id='evento-semantico'>Evento con manejador semántico</button>
    
  // En el archivo JS
  const $eventoSemantico = document.getElementById('evento-seantico')
    // V1
    $eventoSemantico.onclick = holaMundo
    // Recuerda no utilizar '()' en esete apartado o se convierte en una IIFE

    function holaMundo() {
      alert('Hola Mundo')
    }

    // V2 
    $eventoSemantico.onclick = function () {
      alert('Hola Mundo emántico')
    }

  // Desventaja manejadores semánticos: solo se pueden realizar un evento por elemento 

// 3.- Manejadores múltiples
  // En el archivo html
  <button id='evento-multiple'>Evento con manejador múltiple</button>

  // En el archivo JS
  const $eventoMultiple = document.getElementById('evento-multiple')
  
  $eventoMultiple.addEventListener('click', holaMundo)
  $eventoMultiple.addEventListener('click', (e) => {
    console.log(e)
  })
  */

/*  3.11 DOM: Eventos con Parámetros y Remover Eventos

function saludar(nombre = 'Desconocido') {
 alert(`Hola ${nombre}`)
}

const $eventoMultiple = document.getElementById('evento-multiple')

$eventoMultiple.addEventListener('click', saludar)
// En este caso imprime 'Hola [objet MouseEvent]

$eventoMultiple.addEventListener('click', () => saludar())
// Ahora la funcion manejadora del evento es la arrow function
// Por lo tanto el llamado al a función saludar va con parentesis "()"
// Ahora este caso imprime 'Hola Desconocido'

$eventoMultiple.addEventListener('click', () => {
  saludar(Ber)
})
// Ahora este caso imprime 'Hola Ber'

// Removiendo evntos con manejadore múltiples
const $eventoRemover = document.getElementById('evento-remover')

const removerDobleClick = () => {
  $eventoRemover.removeEventListener('dblclick', removerDobleClick)
}

$eventoRemover.addEventListener('dblclick', removerDobleClick)
*/

/* 3.12 DOM: Flujo de Eventos (Burbuja y Captura)
<section class='eventos-flujo'>
  <div class='uno'>
    1
    <div class='dos'>
      2
      <div class='tres'>
        3
      </div>
    </div>
  </div>

</section>

const $divsEventos = document.querySelector('eventos-flujo')

function flujoEventos(e) {
  console.log(`Hola desde ${this.className}, originado desdel div ${e.target}`)
}

$divsEventos.forEach(div => {
  div.addEventListener('click', flujoEventos)
})

// Al dar click en el div 3 imprime lo siguiente:
// Hola desde tres, originado desde el div tres
// Hola desde dos, originado desde el div tres
// Hola desde uno, originado desde el div tres

$divsEventos.forEach(div => {
  div.addEventListener('click', flujoEventos, false)
  // Con el tercer parámetro en false 'burburja': el evento se propaga desde el más interno al más externo
  // Con el tercer parámetro en true 'captura': el evento se propaga desde el más externo al más interno
})

$divsEventos.forEach(div => {
  div.addEventListener('click', flujoEventos, {
    capture: false,
    once: true
  })
  // Capture: indica si el modo de propagación es de burbuja o de captura (true/false)
  // Once: si es true el evento se ejecuta una sola vez
})
*/

/* 3.13 DOM: stopPropagation & preventDefault

<section href='http://youtube.com' class='eventos-flujo'>
  <div class='uno'>
    1
    <div class='dos'>
      2
      <div class='tres'>
        3
      </div>
    </div>
  </div>

</section>

const $divsEventos = document.querySelector('eventos-flujo')

function flujoEventos(e) {
  console.log(
    `Hola desde ${this.className}, originado desdel div ${e.target.className}`
  )
  e.stopPropagation()
  // Detendrá la propagacion del evento
  e.preventDefault()
  // Anula el comportamiento de menara predeterminada que tiene un elemento (button, form, a, etc.)
}

$divsEventos.forEach(div => {
  div.addEventListener('click', flujoEventos)
})
*/

/* 3.14 . DOM: Delegación de Eventos 

const $divsEventos = document.querySelector('eventos-flujo')

function flujoEventos(e) {
  console.log(
    `Hola desde ${this.className}, originado desdel div ${e.target.className}`
  )
}

document.addEventListener('click', (e) => {
  console.log('Click en', e.target)
  // Imprime el lugar donde se está haciendo click

  if (e.target.matches('elemento-especial')) {
    console.log('Ejecuta algún código aquí')
  }
})
*/

/* 3.15 BOM: Objetos: URL, Historial y Navegador 
  console.log(**** Obeto URL (location) ****)   
    console.log(location)
    console.log(location.origin)
    console.log(location.protocol)
    console.log(location.host)
    console.log(location.hostname)
    console.log(location.port)
    console.log(location.href)
    console.log(location.hash)
    console.log(location.search)
    console.log(location.pathname)

  // Méodos
  location.reload()


 
  console.log(**** Objeto History ****)
    console.log(history)
    console.log(history.length) //páginas visitadas

  // Métodos
  history.back(3) // Páginas a retroceder
  history.forward(3) // Páginas a avanzar
  history.go() // Recibe númmero, si son + avanza, si son - retrocede
  
  
  console.log(**** Objeto Navgator ****)
  console.log(navigator)
    console.log(navigator.connection)
    console.log(navigator.geolocation)
    console.log(navigator.mediaDevices)
    console.log(navigator.mimeTypes)
    console.log(navigator.onLine)
    console.log(navigator.serviceWorker)
    console.log(navigator.storage)
    console.log(navigator.usb)
    console.log(navigator.userAgent)

  */




