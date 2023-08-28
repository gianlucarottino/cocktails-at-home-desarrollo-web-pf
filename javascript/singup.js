// Identifico los componentes donde van a ir los mensaje de error
let avisos_error = document.querySelector(".avisoError");

// Array para guardar los mensajes de error
let array_mensajes = new Array();

// Identifico boton para crear cuenta
let button_signup = document.querySelector("#signUpBtn");
button_signup.addEventListener("click", () => {
    
    let formularioValido = validarFormulario();

    // Si formulario guarda un true (pasó las validaciones), creamos la cuenta
    if (formularioValido) {
        crearCuenta();
    
    // Si no, vacio array de mensajes, para que errores demostrados en la siguiente validacion no se sigan mostrando.
    } else {
        array_mensajes = [];
    }
});


function validarFormulario() {
    avisos_error.innerHTML = "";

    // identifico cada input y me quedo con su valor
    let input_nombre = document.getElementById("nombre").value;
    let input_apellido = document.getElementById("apellido").value;
    let input_edad = document.getElementById("edad").value;
    let input_usuario = document.getElementById("usuario").value;
    let input_contraseña = document.getElementById("contraseña").value;
    let input_repeatPass = document.getElementById("repeatPass").value;

    // Validaciones de si el usuario ingreso algo y sino muestro error
    !input_nombre && mostrarError("nombre", "Ingrese un nombre");
    !input_apellido && mostrarError("apellido", "Ingrese un apellido");
    !input_edad && mostrarError("edad", "Ingrese una edad y debe ser mayor o igual a 18 años");
    !input_usuario && mostrarError("usuario", "Ingrese un usuario");
    !input_contraseña && mostrarError("contraseña", "Ingrese una contraseña");
    !input_repeatPass && mostrarError("repeatPass", "Ingrese nuevamente su contraseña");

    // Si el array contiene mensajes de error guardados, doy feedback y retorno la funcion en falso
    if (array_mensajes.length > 0) {

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

    // Si pasa los chequeos, la funcion retorna en true 
    return true;
}

// Funcion para mostrar Error
function mostrarError(inputId, mensaje) {

    // Identifico los componentes donde se van a mostrar cada error
    let errorDiv = document.getElementById(`error_${inputId}`);
    
    // Si se proporciona un mensaje, agrega a la lista de mensajes y muestra en la interfaz
    if (mensaje) {
        
        // Verifico si el mensaje ya está en la lista de mensajes
        if (!array_mensajes.includes(mensaje)) {
            array_mensajes.push(mensaje);
        }
        errorDiv.textContent = mensaje;
    } else {

        // Si no se proporciona un mensaje, busca y elimina el mensaje actual de la lista para que no se siga mostrando en la interfaz
        let mensajeIndex = array_mensajes.indexOf(errorDiv.textContent);

        if (mensajeIndex !== -1) {

            // Elimino el mensaje encontrado de la lista de mensajes
            array_mensajes.splice(mensajeIndex, 1);
        }
    }
}

// Funcion que crea un usuario nuevo a partir de lo que ingresa el usuario 
function crearCuenta() {

    // Identifico cada input y me quedo con su valor
    let input_nombre = document.getElementById("nombre").value;
    let input_apellido = document.getElementById("apellido").value;
    let input_edad = document.getElementById("edad").value;
    let input_usuario = document.getElementById("usuario").value;
    let input_contraseña = document.getElementById("contraseña").value;
    
    // Nuevo objeto a partir de la clase usuario
    let usuario_nuevo = new Usuario (input_usuario, input_contraseña, input_nombre, input_apellido, input_edad);

    // Guardo en la variable, los usuarios que estan en LS
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

// Funcion para verificar si existen usuarios en LS
function obtenerUsuariosLS() {
    let array_usuariosJSON = localStorage.getItem("usuarios");
    return JSON.parse(array_usuariosJSON) || []; // Si no hay datos en el localStorage, retorna un array vacío
}

// Funcion para guardar los usuarios a LS
function guardarUsuariosLS(usuarios) {
    let usuarios_guardados = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", usuarios_guardados);

    console.log("Usuario creado con exito")
}