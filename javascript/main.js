// Creamos coleccion vacia de cocteles
let array_cocteles = new Array();

// Generador de id para no tener que pasarlo manual
let generador_id = 1;

// Aplicar objeto Date aprendido en clase 7
const hoy = new Date();

// Creo variable edad global vacia para poder reutilizarla luego
let edad = "";
let permitir_acceso = entradaUser();

function entradaUser() {

    acceso = confirm("Bienvenid@s a Cocktails at Home. Para poder acceder al contenido de nuestra página web, es necesario ser mayor de edad.");

    if (acceso) {

        // funcion para chequear edad de usuario
        validarEdad();

    } else {

        alert("¡Que lastima que no lo seas! No podemos dejarte ingresar, es un sitio web de bebidas alcoholicas");

    }

    
}


function validarEdad() {

    // Pedimos edad por prompt para validar
    edad = parseInt(prompt("Ingresa tu edad").trim());

    // Bucle para que el usuario pueda ingresar la edad correctamente
    while (isNaN(edad) || edad === "") {

        alert("Por favor, ingresá una edad que sea válida");
        
        edad = prompt ("Debes ingresar tu edad en formato numero. Ej: 22");

    }

    // Validamos si el usuario es mayor de edad
    if (edad >= 18) {

        bienvenidaUser();
        
    // En el caso de que no sea mayor de edad
    } else {

        alert("Lo siento, debes ser mayor de edad para acceder.");

    }
}

// Funcion para dar bienvenida al usuario, luego de
function bienvenidaUser() {

    alert("¡Ahora si, bienvenid@ nuevamente! Podes acceder al contenido de nuestra web y disfrutar de los mejores cocteles \n" + "La fecha actual es: " + hoy.toLocaleString()); // Convertidor de dato de objeto Date a un formato reconocible por los usuarios

    let mostrar_menu = mostrarMenu();

}

// Funcion para mostrar menu al usuario
function mostrarMenu() {

    let bucle = true;

    while (bucle) {

        // Menu de funcionalidades
        let menu = "Indique lo que deseas hacer: ";
        menu += "\n1) Agregar nuevo coctel";
        menu += "\n2) Ver lista de cocteles cargados";
        menu += "\n3) Eliminar coctel";
        menu += "\n4) Salir";

        // Pedimos lo que desea hacer el usuario
        let respuesta = parseInt(prompt(menu).trim()); // trim() = elimina los espacios en blanco que podrían rodear la entrada del usuario 
        
        switch (respuesta){

            case 1:
                agregarCoctel();
                break;

            case 2:
                listearCocteles();
                break;

            case 3:
                eliminarCoctel();
                break

            case 4:
                alert("Gracias por utilzar Cocktails at Home! Regresa cuando quieras");
                bucle = false;
                break;

            case null:
                alert("Gracias por utilzar Cocktails at Home! Regresa cuando quieras");
                bucle = false;
                break;

            default:
                alert("Debes ingresar una opcion valida dentro del menu de opciones");
        }
    }
}

