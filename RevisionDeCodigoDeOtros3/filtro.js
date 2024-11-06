

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]


const listaDeProductos = document.getElementById("lista-de-productos"); // Corregimos rl nombre de la variable y cambiamos el metodo .getElementByName por .getElementById
const filtroInput = document.getElementById("filtroInput"); // Corregimos rl nombre de la variable y cambiamos el metodo .querySelector por .getElementById, ademas en el html no tenemos dicho tal id, asi que ponemos un id en html "filtroInput"


function mostrarProductos (productosParaMostrar) {
  listaDeProductos.innerHTML = ""; //Agregamos una funcion llamda mostrarProductos con parametro de productosParaMostrar para limpiar el contenedor de productos

for (let i = 0; i < productosParaMostrar.length; i++) {
  const productoContenedor = document.createElement("div") //cambiamos var por const y agregamos un nombre descrptivo ("productoContenedor")
  productoContenedor.classList.add("producto") //cambiamos d por "productoContenedor"

  const nombreProducto = document.createElement("p") //cambiamos var por const y agregamos un nombre descriptivo
  nombreProducto.classList.add("titulo") //  cambiamos ti por "nombreProducto"
  nombreProducto.textContent = productosParaMostrar[i].nombre // vambiamos ti por nombreProducto
  
  const imagen = document.createElement("img"); //cambiamos var por const
  imagen.setAttribute('src', productos[i].img);

  productoContenedor.appendChild(nombreProducto)//cambiamos d por "productoContenedor" y ti por 
  productoContenedor.appendChild(imagen) // cambiamos d por "productoContenedor"

  listaDeProductos.appendChild(productoContenedor) // cambiamos li por "listaDeProductos" y d por "productoContenedor"
}
}

// eliminamos esta sentencia por que no la tenemos definida en ningun lado -> displayProductos(productos)
const botonDeFiltro = document.querySelector("button");



// Mostramos inicialmente todos los productos
mostrarProductos(productos);

// Evento de filtrado
botonDeFiltro.onclick = function() {
 // eliminamos esta sentencia por que ya hemos puesto que se limpie el contenedor en la funcion anterior -> listaDeProductos.innerHTML = ""; 

  const texto = filtroInput.value.toLowerCase();   console.log(texto);
  
  // Filtramos los productos
  const productosFiltrados = filtrado(productos, texto);

  mostrarProductos(productosFiltrados);}


function filtrado(productos = [], texto) { // Cambiamos la const por function, ya que es una funcion y no una vatiable
  return productos.filter(item =>
    item.tipo.includes(texto) || item.color.includes(texto)
  );
}