// Funcion para pedir datos al usuario del nuevo coctel a agregar
function solicitarDatosCoctel() {

    // variable para poder utilizar while
    let checker = true;

    // Comenzamos a ciclar para que el usuario pueda cargar correctamente los datos, si asi lo desea
    while (checker) {

        // variable para guardar el mensaje de error que se va a mostrar, si el usuario comete alguno
        let mensaje = "";

        let nombre_coctel = prompt("Ingresa nombre del coctel").trim();
        let ingredientes = prompt("Ingresa ingredientes").trim();
        let preparacion = prompt("Ingresa preparacion").trim();

        // Validamos si el usuario ingresó un nombre de coctel válido
        if (!nombre_coctel) {

            mensaje = "\n-Debes ingresar el nombre del coctel";

        }

        // Validamos si el usuario ingresó ingredientes válidos
        if (!ingredientes) {

            mensaje = "\n-Debes ingresar ingredientes del coctel";

        }

        // Validamos si el usuario ingresó una preparacion válida
        if (!preparacion) {

            mensaje = "\n-Debes ingresar la preparacion del coctel";

        }

        // Validamos si el usuario cometio alguno de los errores declarados anteriormente y damos feedback
        if (mensaje != "") {

            alert(mensaje);

            //Solicitamos nuevo ingreso de datos en caso de error
            checker = confirm("Deseas cargar nuevamente los datos?");

        }else {
            //Al estar los datos validos, se devuelve un objeto Coctel creado por el usuario
            return new Coctel(nombre_coctel, ingredientes, preparacion,);
        }
    }
}

// Funcion para agregar coctel a array 
function agregarCoctel() {

    // Guardamos valor de nuevo coctel en esta variable (aloja un objeto)
    let coctel = solicitarDatosCoctel();

    if (coctel) {
        
        // Se utiliza metodo de objeto con variable de generador global
        coctel.setId(generador_id);

        // Sumalizamos el generador global para que no se dupliquen los id
        generador_id++;

        // Agregamos objeto a array de cocteles
        array_cocteles.push(coctel);

        // Feedback de agregado
        alert("Coctel agregado con exito");
    }
}

// Funcion para eliminar un coctel especifico del array 
function eliminarCoctel() {

    // Validamos de que solo si existen cocteles dentro del array, se muestren
    if (existenCocteles()) {

        mostrarCocteles();
        
        // Se le pide al usuario que ingrese el id para identificar el coctel a eliminar
        let id_ingresado = parseInt(prompt("Ingresa el id del coctel a eliminar").trim());

        // Si el id que ingreso el usuario es valido
        if (id_ingresado) {

            let coctel_encontrado = array_cocteles.find((coctel) => coctel.id === id_ingresado);

            if (coctel_encontrado) {

                array_cocteles = array_cocteles.filter((coctel) => coctel.id != id_ingresado);
                alert ("Coctel eliminado con exito");

            }

        } else {

            alert ("El id que ingresaste no coincide con ningun coctel");
        }
    }
}

// Funcion para validar de que existan cocteles creados dentro del array
function existenCocteles() {

    if (array_cocteles.length == 0) {

        alert("No existen cocteles creados");
        return false;

    }
    
    return true;

}

// Funcion para recorrer el array y poder mostrarlo
function mostrarCocteles() {

    let mensaje = "Los cocteles creados son:";

    array_cocteles.forEach((coctel) => {

        mensaje += "\n" + coctel.mostrarDescripcion();
    })

    alert(mensaje);

}

// Funcion para mostrar los cocteles solo si existen y en el caso de que no, dar feedback
function listearCocteles() {

    if (existenCocteles()) {

        mostrarCocteles();

    }
}