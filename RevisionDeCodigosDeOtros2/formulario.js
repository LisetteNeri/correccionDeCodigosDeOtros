const formulario = document.querySelector(".form") /*Cambiamos todas las "var" por "const", tambien cambiamos el # por un "." ya que se esta llamando por clase y no por id*/

formulario.onsubmit = function(event) { //Cambiamos el nombre la funcion por algo mas decriptivo por que ademas esta declarando dos "e"  

  event.preventDefault(); //agregamos Default a prevent, "prevent" por si solo no existe
  
  const nombreInput = formulario.elements[0] //Cambiamos el nombre de las variables, en est caso "nombreInput" por que es el nombre que se ingresara y para evitar confusiones mas adelante con la variable "nombre" 
  const edadInput = formulario.elements[1]//Cambiamos el nombre de las variables, en est caso "edadInput" por que es el nombre que se ingresara y para evitar confusiones mas adelante con la variable "edad"
  const nacionalidadInput = formulario.elements[2]//Cambiamos el nombre de las variables, en est caso "nacionalidadInput" por que es el nombre que se ingresara y para evitar confusiones mas adelante con la variable "nacionalidad"

  const nombre = nombreInput.value; //agregamos los ";" y renombramos las variables con nombres descriptivos 
  const edad = edadInput.value; //agregamos los ";" y renombramos las variables con nombres descriptivos 
  
  const i = nacionalidadInput.selectedIndex //agregamos los ";" y renombramos las variables con nombres descriptivos 

  const nacionalidad = nacionalidadInput.options[i].value; //agregamos ";" 

  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    nombreInput.classList.add("error"); //agregamos ;
  }
  if (edad < 18 || edad > 60) { //Yo sugiera que la edad se deje en un rango mas bajo, de 60 años en lugar de 120
    edadInput.classList.add("error"); //agregamos ;
  }

if (nombre.length > 0 && edad > 18 && edad < 60 ) { //el codigo estaba distribuido en tres renglones, cuando puso quedar en uno solo y se eliminaronp parentesis dentro del if, se puso el rango hasta los 60 años 
  agregarInvitado(nombre, edad, nacionalidad); //agregamos ;
  }
}

const botonBorrar = document.createElement("button"); //agregamos ;
botonBorrar.textContent = "Eliminar invitado"; //agregamos ;
botonBorrar.id = "boton-borrar"; //agregamos ;
const corteLinea = document.createElement("br"); //agregamos ;
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados"); //agregamos ;
const elementoLista = document.createElement("div"); //agregamos ;
elementoLista.classList.add("elemento-lista"); //agregamos ; y no existe el added, es "add"
lista.appendChild(elementoLista); //agregamos ;

/*const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)*/ //podemos simplificar y evitar todo este parrafo con la siguiente funcion 

/*crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);*/  //Los utilizaremos solo una vez despues de la funcion

function crearElemento(descripcion, valor, contenedor) { //Agregamos una funcion para que sea reutilizable

const spanNombre = document.createElement("span"); //Agregamos ;
const inputNombre = document.createElement("input"); //Agregamos ;
const espacio = document.createElement("br"); //Agregamos ;

spanNombre.textContent = descripcion + ": "; //Agregamos ;
inputNombre.value = valor; //Agregamos ;

elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre); Agregamos ;
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


const botonBorrar = document.createElement("button"); //agregamos ; 
botonBorrar.textContent = "Eliminar invitado"; //agregamos ;
botonBorrar.id = "boton-borrar"; //agregamos ;
const corteLinea = document.createElement("br"); //agregamos ;
elementoLista.appendChild(corteLinea); //agregamos ;
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
