// 27) Programa una clase llamada Pelicula.

// <!-- 27) Programa una clase llamada Pelicula. -->
// <!-- La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. -->

// Solocion J.M.

// const generosDisponibles = 

class Pelicula {
  constructor ({
    id,
    titulo,
    director,
    estreno,
    paisOrigen,
    genero,
    calificacion
  })

  {
    this.id = id
    this.titulo = titulo
    this.director = director
    this.estreno = estreno
    this.paisOrigen = paisOrigen
    this.genero = genero
    this.calificacion = calificacion

    this.validarIMDB(id)
    this.validarTitulo(titulo)
    this.validarDirector(director)
    this.validarAñoEstreno(estreno)
    this.validarPais(paisOrigen)
    this.validarGeneros(genero)
    this.validarCalificacion(calificacion)
  }

  static get listaGeneros () {
    return [
      'Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
  }  

  static generosAceptados() {
    return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')}`)
  }

  fichaTecnica() {
    console.info(`
Ficha Técnica:
  Id = ${this.id}
  Titulo = ${this.titulo}
  Director = ${this.director}
  Estreno = ${this.estreno}
  Pais de Origen = ${this.paisOrigen.join('-')}
  Genero = ${this.genero.join('/')}
  Calificacion = ${this.calificacion}
    `)
  }

  validarCadenas(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" está vaciío`)
    if (typeof valor !== 'string') return console.log(`${propiedad} "${valor}" ingresado NO es una cadena de texto`)

    return true
  }

  validarLoingitudCadena( propiedad, valor, longitud) {
    if (valor.length > longitud) return console.log(`${propiedad} "${valor}" el tamaño del valor no cohincide con los valores permitidios (${longitud})`)

    return true
  }
  
  validarNumero(propiedad, numero) {
    if (!numero) return console.log(`${propiedad} "${numero}" está vacío`)
    if (typeof numero !== 'number') return console.log(`${propiedad} "${numero}" ingresado NO es un número`)

    return true
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.log(`${propiedad} "${valor}" está vacío`)
    if (!(valor instanceof Array)) return console.log(`${propiedad} "${valor}" ingresado NO es un arreglo`)
    if (valor.length === 0) return console.log(`${propiedad} "${valor}" no tiene datos`)

    for (let cadena of valor) {
      if (typeof cadena !== 'string') return console.log(`El valor "${cadena}" NO es una cadena de texto`)
    }
    
    return true
  }

  
  validarIMDB (id) { 
    if (this.validarCadenas('IMBD id', id)) {
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
        return console.log( `IMDB id "${id}" no es válido, debe tener 9 caracteres, 2 letras minúsculas al iniciar seguido de 7 números`)
      }
    }
  }

  validarTitulo (titulo) {
    if (this.validarCadenas('Titulo', titulo)) {
       this.validarLoingitudCadena('Título', titulo, 100)
    }
  }

  validarDirector (director) {
    if (this.validarCadenas('Director', director)) {
       this.validarLoingitudCadena('Director', director, 50)
    }
  }

  validarAñoEstreno (estreno) {
    if (this.validarNumero('Año de estreno', estreno)) {
      if (!(/^([0-9]){4}$/.test(estreno))) {
        return console.log( `Año de estreno "${estreno}" no es válido, debe tener 4 números`)
      }
    }
  }
  
  validarPais(paisOrigen) {
    this.validarArreglo('Pais', paisOrigen)
  }

  validarGeneros(genero) {
    if (this.validarArreglo('Género', genero)) {
      for (let generoUn of genero) {
        if (!Pelicula.listaGeneros.includes(generoUn)) {
         console.log(`Generos incorrectos "${genero.join(', ')}"`)
          Pelicula.generosAceptados()
        }
      }
    }
  }

  validarCalificacion (calificacion) {
    if (this.validarNumero('Calificación', calificacion)) {
      return (calificacion < 0 || calificacion > 10)
        ? console.info(`La calificacion tiene que estar en un rango entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1)
      }
    }
}

const peli = new Pelicula({
  id: "tt1234567",
  titulo: "Titulo de la peli",
  director: "Directorde la peli",
  estreno: 2234,
  paisOrigen: ['México','Francia'],
  genero: ['Adult', 'Drama'],
  calificacion: 9.7
})

peli.fichaTecnica()