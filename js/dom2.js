/* 2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:

mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada 
y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.

mostrarDatos: devuelve toda la información del objeto.

Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario,
 también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
 */

let anoActual = 2022;
let nombre = "";
let edad = 0;
let dni = 0;
let sexo = "";
let peso = 0;
let altura = 0;
let anoNacimiento = 0;

let form = document.getElementById("forms");
form.onclick = function (i) {
  i.preventDefault();
};

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoNacimiento = anoNacimiento;
  }

  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  set modificarEdad(nuevoEdad) {
    this.edad = nuevoEdad;
  }
  set modificarDni(nuevoDni) {
    this.dni = nuevoDni;
  }
  set modificarSexo(nuevoSexo) {
    this.sexo = nuevoSexo;
  }
  set modificarPeso(nuevoPeso) {
    this.peso = nuevoPeso;
  }
  set modificarAltura(nuevoAltura) {
    this.altura = nuevoAltura;
  }

  set modificarAnoNacimiento(nuevoAnoNacimiento) {
    this.anoNacimiento = nuevoAnoNacimiento;
  }

  get mostrarNombre() {
    return this.nombre;
  }
  get mostrarEdad() {
    return this.edad;
  }
  get mostrarDni() {
    return this.dni;
  }
  get mostrarSexo() {
    return this.sexo;
  }
  get mostrarPeso() {
    return this.peso;
  }
  get mostrarAltura() {
    return this.altura;
  }
  get mostrarAnoNacimiento() {
    return this.anoNacimiento;
  }

  mostrarGeneracion() {
    switch (true) {
      case this.anoNacimiento >= 1994 && this.anoNacimiento <= 2010:
        alert(
          "Pertenece a la Generacion Z, su rasgo caracteristico es: Expansion masiva de Internet."
        );
        break;
      case this.anoNacimiento >= 1981 && this.anoNacimiento <= 1993:
        alert(
          "Pertenece a la Generacion Y, su rasgo caracteristico es: Inicio de la digilitacion."
        );
        break;
      case this.anoNacimiento >= 1969 && this.anoNacimiento <= 1980:
        alert(
          "Pertenece a la Generacion X, su rasgo caracteristico es: Crisis del 73 y transicion española."
        );
        break;
      case this.anoNacimiento >= 1949 && this.anoNacimiento <= 1968:
        alert(
          "Pertenece a la Generacion  Baby Boom, su rasgo caracteristico es: Paz y explosion demografica."
        );
        break;
      case this.anoNacimiento >= 1930 && this.anoNacimiento <= 1948:
        alert(
          "Pertenece a la Generacion Silent Generation, su rasgo caracteristico es: Conflictos belicos."
        );
        break;

      default:
        alert("Año ingresado es incorrecto");
        break;
    }
  }

  clickMayorEdad() {
    if (this.edad >= 18) {
      let botonMayorEdad = window.alert("Es mayor de edad");
      botonMayorEdad;
    } else {
      let botonMenorEdad = window.alert("Es menor de edad");
      botonMenorEdad;
    }
  }
  mostrarDatos() {
    alert(`
        Nombre: ${this.nombre}
        DNI: ${this.edad}
        DNI: ${this.dni}
        Sexo: ${this.sexo}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Año de Nacimiento: ${this.anoNacimiento}
    `);
  }
}

/* let persona = new Persona("jorge", 54, 2090239, "Hombre", 19, 20, 1990); */

function formularioPersona() {
  nombre = document.getElementById("nombre").value;
  edad = document.getElementById("edad").value;
  dni = document.getElementById("dni").value;
  sexo = document.getElementById("sexo").value;
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  anoNacimiento = document.getElementById("anoNacimiento").value;
  let persona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    anoNacimiento
  );
  return persona;
}

function crearObjeto() {
  let persona = formularioPersona();
}

function generacion() {
  let persona = formularioPersona();
  persona.mostrarGeneracion();
}

function mayor() {
  persona.clickMayorEdad();
}

function datos() {
  let persona = formularioPersona();
  persona.mostrarDatos();
}

/*   let mainPadre = document.getElementsByClassName("container");
  let formulario = document.createElement("form");
  formulario.innerHTML = "Prueba";
  mainPadre[1].appendChild(formulario); */
