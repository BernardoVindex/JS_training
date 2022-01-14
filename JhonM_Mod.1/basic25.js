// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

// FALD EXCERCISE
// Fuente https://matiashernandez.dev/blog/post/4-formas-de-eliminar-elementos-duplicados-en-un-arreglo-con-javascript
// 1ts: Array filter
let data = [1,2,6,1,2,5,9,'33','33'];

let result = data.filter((item,index)=>{
  return data.indexOf(item) === index;
})
console.log(result); //[1,2,6,5,9,'33']



// 2nd: Set
// El objeto global Set es una estructura de datos, una colección de valores que permite sólo almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.

// Es posible iterar sobre los elementos en el orden de inserción
let data = [1,2,6,1,2,5,9,'33','33'];

const dataArr = new Set(data);

let result = [...dataArr];

console.log(result); //[1,2,6,5,9,'33']


// 3th Reduce 

let data = [1,2,6,1,2,5,9,'33','33'];

const result = data.reduce((acc,item)=>{
  if(!acc.includes(item)){
    acc.push(item);
  }
  return acc;
},[])

console.log(result); //[1,2,6,5,9,'33']


// 4th ForEach y otros loops
let data = [1,2,6,1,2,5,9,'33','33'];

const result = [];
data.forEach((item)=>{
  //pushes only unique element
    if(!uniqueArr.includes(item)){
    uniqueArr.push(item);
  }
})
console.log(result); //[1,2,6,5,9,'33']


// Soucion J.M.

const quitarDuplicados = (arr = undefined) => {
  if (a === undefined) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (arr.length === 0) return console.log('El arreglo está vacío')
  if (arr.length === 1) return console.log('El arreglo deber tener al menos dos elementos')

  return console.log({
    original: arr,
    sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
  })
} 

const quitarDuplicados2 = (arr = undefined) => {
  if (a === undefined) return console.log (`No se ha ingresado ningún arreglo`)
  if (!(a instanceof Array)) return console.log(`Solo se puede ingresar arreglos con valores numéricos"[ ]"`)
  if (arr.length === 0) return console.log('El arreglo está vacío')
  if (arr.length === 1) return console.log('El arreglo deber tener al menos dos elementos')

  return console.log({
    original: arr,
    sinDuplicados: [...new Set(arr)]
  })
} 

