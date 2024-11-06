const baseEndpoint = 'https://api.github.com'; //modificamos el nombre de la variable a camelCase, de baseEndpoint a baseEndPoint
const usersEndpoint = `${baseEndpoint}/users`; //modificamos el nombre de la variable a camelCase, de baseEndpoint a usersEndPoint
const name = document.querySelector('#name'); //cambiamos el nombre de las constantes por palabras significativas, no solo una letra, evitamos que el nombre comience con un simbolo. Tambien corregimos la llamada, como en html el contenedor se encuentra con un id, la llamada aqui, sera con un simbolo "#". Lo mismo ocurrio para la const blog y location
const blog = document.querySelector('#blog');
const location = document.querySelector('#location');

async function displayUser(username) { //cuando usamos wait hablamos de una funcion asincronica, por eso agregamos el async

  
  name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //agregamos json para que pueda ser un objeto json

  console.log(data);
  name.textContent = `${data.name}`; //cambiamos las comillas invertidas por las comillas simples
  blog.textContent = `${data.blog}`; //cambiamos las comillas invertidas por las comillas simples
  location.textContent = `${data.location}`;//cambiamos las comillas invertidas por las comillas simples
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);