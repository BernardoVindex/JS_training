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

const filmoteca = [
  [
    id,
    titulo,
    director,
    añoEstreno,
    paisOrigen,
    género,
    calificacion
 ],
  [
    id,
    titulo,
    director,
    añoEstreno,
    paisOrigen,
    género,
    calificacion
  ],
  [
    id,
    titulo,
    director,
    añoEstreno,
    paisOrigen,
    género,
    calificacion
  ]

]

const generosDisponibles = [
  'Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game'-'Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk'-'Show', 'Thriller', 'War', 'Western'
]

class Pelicula {
  constructor ({
    id,
    titulo,
    director,
    añoEstreno,
    paisOrigen,
    género,
    calificacion
  })

  {this.id = id
  this.titulo = titulo
  this.director = director
  this.añoEstreno = añoEstreno
  this.paisOrigen = paisOrigen
  this.género = género
  this.calificacion = calificacion}

  static generos () {
    
  }  

  ficha () {
    console.log(`
      Id: ${this.id}
      Titulo: ${this.titulo}
      Director: ${this.director}
      Año de Estreno: ${this.añoEstreno}
      Pais de Origen: ${this.paisOrigen}
      Género: ${this.género} 
      Calificación: ${this.calificacion} 
    `)
  }
}