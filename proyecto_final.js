function mostrar(valor) {
    document.getElementById("texto" + valor).style.display = "block";
    document.getElementById("mostrar"+valor).style.display = "none";
    document.getElementById("ocultar" + valor).style.display = "block";
    
}
function ocultar(valor) {
    document.getElementById("texto"+valor).style.display = "none";
    document.getElementById("ocultar" + valor).style.display = "none";
    document.getElementById("mostrar"+valor).style.display = "block";
}

/**funcion para cambiar las habilidades*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }  


document.getElementById("cambiarPersona").addEventListener ("click", function () {
 let resultado = getRandomIntInclusive(50, 100);
  console.log(resultado);
  
  document.getElementById("habilidad1").value = parseInt(resultado)
})

document.getElementById("cambiarPersona").addEventListener ("click", function () {
    let resultado = getRandomIntInclusive(20, 80);
     console.log(resultado);
     
     document.getElementById("habilidad2").value = parseInt(resultado)
   })

   document.getElementById("cambiarPersona").addEventListener ("click", function () {
    let resultado = getRandomIntInclusive(5, 50);
     console.log(resultado);
     
     document.getElementById("habilidad3").value = parseInt(resultado)
   })

   //variables
const boton = document.querySelector("#cambiarPersona");
const foto = document.querySelector("#foto");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const direccion = document.querySelector("#direccion");
const altura = document.querySelector("#altura")
const ciudad = document.querySelector("#ciudad")

//funciones
const generarUsuario = async() => {
    try {
        const url = "https://randomuser.me/api/";
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];

        console.log(datos);

        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first
        apellido.textContent = datos.name.last
        correo.textContent = datos.email
        telefono.textContent = datos.phone
        direccion.textContent = datos.location.street.name
        altura.textContent = datos.location.street.number
        ciudad.textContent = datos.location.city

    } catch (error) {
        console.log(error);
    }
}

boton.addEventListener("click", generarUsuario);
document.addEventListener("DOMContentLoaded" , generarUsuario)