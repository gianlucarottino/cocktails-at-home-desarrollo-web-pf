document.addEventListener("DOMContentLoaded", function () {
  // Mostrar la ventana modal después de 2 segundos (2000 milisegundos)
  let modal = document.getElementById("modal");
  setTimeout(() =>{
    modal.style.visibility = "visible";
  }, 1000);

  let yesBtn = document.getElementById("yesBtn");
  yesBtn.addEventListener("click", () => {

    modal.style.visibility = "hidden";

  })

  let noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("click", () => {

    let sin_permiso = sinPermiso();

  })
});

function sinPermiso() {

  let modal_contenido = document.getElementById("modalCtn")
  modal_contenido.innerHTML = "";
  
  let ilustracion_error = document.createElement("img");
  let urlImg = "./images/feeling-sorry-cuate.png"
  ilustracion_error.src = urlImg;
  modal_contenido.appendChild(ilustracion_error);

  let titulo_error = document.createElement("h2");
  titulo_error.classList = "modal-title";
  titulo_error.textContent = "¡Que lastima que no lo seas!";
  modal_contenido.appendChild(titulo_error);

  let parrafo_error = document.createElement("p");
  parrafo_error.textContent = "No podemos dejarte ingresar, es un sitio web de bebidas alcoholicas";
  modal_contenido.appendChild(parrafo_error);

}