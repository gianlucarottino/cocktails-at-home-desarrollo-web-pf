let avisos_error = document.querySelector(".avisoError");

let array_mensajes = new Array();

let button_signup = document.querySelector("#signUpBtn");

button_signup.addEventListener("click", () => {
    
    let formularioValido = validarFormulario();

    if (formularioValido) {
        crearCuenta();

    } else {
        resetForm()
    }
});


function validarFormulario() {
    avisos_error.innerHTML = "";
    
    let input_nombre = document.getElementById("nombre").value;
    let input_apellido = document.getElementById("apellido").value;
    let input_edad = document.getElementById("edad").value;
    let input_usuario = document.getElementById("usuario").value;
    let input_contraseña = document.getElementById("contraseña").value;
    let input_repeatPass = document.getElementById("repeatPass").value;

    !input_nombre && mostrarError("nombre", "Ingrese un nombre");
    !input_apellido && mostrarError("apellido", "Ingrese un apellido");
    !input_edad && mostrarError("edad", "Ingrese una edad y debe ser mayor o igual a 18 años");
    !input_usuario && mostrarError("usuario", "Ingrese un usuario");
    !input_contraseña && mostrarError("contraseña", "Ingrese una contraseña");
    !input_repeatPass && mostrarError("repeatPass", "Ingrese nuevamente su contraseña");

    if (array_mensajes.length > 0) {


        console.log(array_mensajes);

        Toastify({

            text: "¡No pudimos crear tu cuenta! Revisá los mensajes de error descriptos debajo de cada campo",
            duration: 2000,
            gravity: "bottom",
            style: {
                background: "#b81414",
                padding: "1.25em",
                borderRadius: "11px",
            }
            
            }).showToast();

        return false; 
    }

    return true;
}

function mostrarError(inputId, mensaje) {
    let errorDiv = document.getElementById(`error_${inputId}`);
    
    if (mensaje) {
        
        if (!array_mensajes.includes(mensaje)) {
            array_mensajes.push(mensaje);
        }
        errorDiv.textContent = mensaje;
    } else {

        let mensajeIndex = array_mensajes.indexOf(errorDiv.textContent);
        if (mensajeIndex !== -1) {
            array_mensajes.splice(mensajeIndex, 1);
        }
    }
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

    Toastify({

        text: "Cuenta creada con éxito",
        duration: 2000,
        gravity: "bottom",
        style: {
            background: "#28a745",
            padding: "1.25em",
            borderRadius: "11px",
        }
        
        }).showToast();

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 2000);

    
}

function resetForm(){

    array_mensajes = [];

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