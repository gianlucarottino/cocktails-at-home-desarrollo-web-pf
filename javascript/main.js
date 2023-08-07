let avisos_error = document.querySelector(".avisoError");

let formSign = document.querySelector(".formSign");
let button_signup = document.querySelector("#signUpBtn");

formSign.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    let formularioValido = validarFormulario();

    if (formularioValido) {
        crearCuenta();
        resetForm();
    }
});

button_signup.addEventListener("click", () => {
    let formularioValido = validarFormulario();
    
    if (formularioValido) {
        crearCuenta();
        resetForm();
    }
    
    console.log("Formulario válido:", formularioValido);
});


function validarFormulario() {
    avisos_error.innerHTML = "";
    
    let input_nombre = document.getElementById("nombre").value;
    let input_apellido = document.getElementById("apellido").value;
    let input_edad = document.getElementById("edad").value;
    let input_usuario = document.getElementById("usuario").value;
    let input_contraseña = document.getElementById("contraseña").value;
    let input_repeatPass = document.getElementById("repeatPass").value;

    let array_mensajes = new Array();

    !input_nombre && mostrarError("nombre", "Ingrese un nombre");
    !input_apellido && mostrarError("apellido", "Ingrese un apellido");
    !input_edad && mostrarError("edad", "Ingrese una edad y debe ser mayor o igual a 18 años");
    !input_usuario && mostrarError("usuario", "Ingrese un usuario");
    !input_contraseña && mostrarError("contraseña", "Ingrese una contraseña");
    !input_repeatPass && mostrarError("repeatPass", "Ingrese nuevamente su contraseña");

    console.log("Cantidad de mensajes de error:", array_mensajes);

    if (array_mensajes.length > 0) {
        let lista = document.createElement("ul");
        lista.textContent = "No es posible cargar los datos: ";
        
        array_mensajes.forEach(mensaje => {
            lista.appendChild(crear_item(mensaje));
        });
        
        avisos_error.appendChild(lista);
        
        return false; // Si hay mensajes de error, el formulario no es válido
    }

    return true; // Si no hay mensajes de error, el formulario es válido
}

function crear_item(mensaje) {
    let item = document.createElement("li");
    item.textContent = mensaje;
    return item;
}

function mostrarError(inputId, mensaje) {
    let errorDiv = document.getElementById(`error_${inputId}`);
    errorDiv.textContent = mensaje;
}

function crearCuenta() {

    let input_nombre = document.getElementById("nombre").value;
    let input_apellido = document.getElementById("apellido").value;
    let input_edad = document.getElementById("edad").value;
    let input_usuario = document.getElementById("usuario").value;
    let input_contraseña = document.getElementById("contraseña").value;
    
    let usuario_nuevo = new Usuario (input_usuario, input_contraseña, input_nombre, input_apellido, input_edad);

    let usuarios_guardados = obtenerUsuariosLS();

    usuarios_guardados.push(usuario_nuevo);

    guardarUsuariosLS(usuarios_guardados);

    window.location.href = "../index.html";
}

function resetForm(){

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
    document.getElementById("repeatPass").value = "";

}

function obtenerUsuariosLS() {
    let array_usuariosJSON = localStorage.getItem("usuarios");
    return JSON.parse(array_usuariosJSON) || []; // Si no hay datos en el localStorage, retorna un array vacío
}

function guardarUsuariosLS(usuarios) {
    let usuarios_guardados = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", usuarios_guardados);

    console.log("Usuario creado con exito")
}