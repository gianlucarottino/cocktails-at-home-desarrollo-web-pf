// Inicializo clase Gestionar Cocteles
let gestorCocteles = new GestionarCocteles();

// Creo Array para guardar la info que traje con la solicitud a la base de datos
let coctelesBebidas = new Array();

document.addEventListener("DOMContentLoaded", () => {

    gestorCocteles.solicitarData();
    
})

document.querySelector("#searchBar").addEventListener("keyup", () => {

    let busqueda = document.getElementById("searchBar").value;
    
    if (busqueda.length >= 3) {

        gestorCocteles.buscarCocteles(busqueda);

    } else {

        gestorCocteles.mostrarExistencia("Todos los cocteles disponibles");

    }
})