document.addEventListener("DOMContentLoaded", () => {
    // Verificar si ya se respondió "sí" anteriormente
    const respondedYes = sessionStorage.getItem("respondedYes");

    if (!respondedYes || respondedYes !== "true") {
        let modal = document.getElementById("modal");
        setTimeout(() => {
            modal.style.visibility = "visible";
        }, 1000);
    }

    let yesBtn = document.getElementById("yesBtn");
    yesBtn.addEventListener("click", () => {
        onBoarding();

        // Almacenar en sessionStorage que se respondió "sí"
        sessionStorage.setItem("respondedYes", "true");
    });

    let noBtn = document.getElementById("noBtn");
    noBtn.addEventListener("click", () => {
        sinPermiso();
    });
});

function nuevoModal(url_img, text_titulo, text_parrafo, button_text,button_id) {
    
    let modal_contenido = document.getElementById("modalCtn");
    modal_contenido.innerHTML = "";

    let div_modal_texto = document.createElement("div");
    div_modal_texto.classList = "modal-texto";
    modal_contenido.appendChild(div_modal_texto);

    let ilustracion = document.createElement("img");
    ilustracion.src = url_img;
    modal_contenido.appendChild(ilustracion);

    let titulo = document.createElement("h2");
    titulo.classList = "modal-title";
    titulo.textContent = text_titulo;
    modal_contenido.appendChild(titulo);

    let parrafo = document.createElement("p");
    parrafo.textContent = text_parrafo;
    modal_contenido.appendChild(parrafo);

    let div_modal_btn = document.createElement("div");
    div_modal_btn.classList = "modal-botones";
    modal_contenido.appendChild(div_modal_btn);

    let button = document.createElement("button");
    button.classList = "btn prim";
    button.textContent = button_text;
    button.id = button_id;
    div_modal_btn.appendChild(button);
}

function onBoarding() {
    let url_img = "./images/done-pana.png";
    let text_titulo = "¡Que bueno conocerte!";
    let text_parrafo =
        "Maximiza tu experiencia: Create una cuenta ahora y descubre todas las funciones de nuestra aplicación. ¡Bienvenido(a)!";
    let button_text = "¡Crear cuenta ahora!";
    let button_id = "loginBtn";

    nuevoModal(url_img, text_titulo, text_parrafo, button_text, button_id);

    button = document.getElementById("loginBtn");
    button.addEventListener("click", () => {
        window.location.href = "./pages/signup.html";
    });
}

function sinPermiso() {
    let url_img = "./images/feeling-sorry-cuate.png";
    let text_titulo = "¡Que lastima que no lo seas!";
    let text_parrafo =
        "No podemos dejarte ingresar, es un sitio web de bebidas alcoholicas";
    let button_text = "Cerrar pagina";
    let button_id = "exitBtn";

    nuevoModal(url_img, text_titulo, text_parrafo, button_text, button_id);

    button = document.getElementById("exitBtn");
    button.addEventListener("click", () => {
        window.close();
    });
}

let button_google = document.querySelector("#googleBtn")
button_google.addEventListener("click", () => {

    inProgress();

})

function inProgress() {

    body = document.body
    let url_img = "../images/feeling-sorry-cuate.png"
    let text_titulo = "Funcionalidad proximamente disponible";
    let text_parrafo =
    "Estamos trabajando arduamente para mejorar tu experiencia. Muy pronto, podrás disfrutar de esta funcionalidad que revolucionará tu experiencia con nosotros.";
    let button_text = "Cerrar";
    let button_id = "inProgBtn";
    
    let modal = document.createElement("div");
    modal.classList = "modales";
    body.appendChild(modal);
    modal.style.visibility = "visible"

    let modal_contenido = document.createElement("div");
    modal_contenido.classList = "modal-contenido";
    modal.appendChild(modal_contenido);

    let modal_texto = document.createElement("div");
    modal_texto.classList = "modal-texto";
    modal_contenido.appendChild(modal_texto);

    let modal_botones = document.createElement("div");
    modal_botones.classList = "modal-botones";
    modal_contenido.appendChild(modal_botones);

    let ilustracion = document.createElement("img");
    ilustracion.src = url_img;
    modal_texto.appendChild(ilustracion);

    let titulo = document.createElement("h2");
    titulo.classList = "modal-title";
    titulo.textContent = text_titulo;
    modal_texto.appendChild(titulo);

    let parrafo = document.createElement("p");
    parrafo.textContent = text_parrafo;
    modal_texto.appendChild(parrafo);

    let button = document.createElement("button");
    button.classList = "btn prim";
    button.textContent = button_text;
    button.id = button_id;
    modal_botones.appendChild(button);

    button = document.getElementById("inProgBtn");
    button.addEventListener("click", () => {

        cerrarModal();

    })
}

function cerrarModal() {

    let modal = document.querySelector(".modales");
    modal.style.visibility = "hidden";

}


