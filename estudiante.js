class Estudiante {
  #nombre;
  #asignaturas= ['javascript', 'HTML', 'CSS'];

  constructor(nom) {
    this.#nombre = nom;
   
  }

obtenDatos(){
  let datos=[this.#nombre, ...this.#asignaturas]

    return datos
}


}


const est_1= new Estudiante('angel')

dat=est_1.obtenDatos()
console.log(dat)
