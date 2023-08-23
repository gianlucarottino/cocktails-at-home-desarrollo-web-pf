let gestorCocteles

let coctelesBebidas = new Array();
// let coctelesBebidas_copia = coctelesBebidas;

document.addEventListener("DOMContentLoaded", () => {

    gestorCocteles = new GestionarCocteles();
    gestorCocteles.solicitarData();
    
})

document.querySelector("#searchBar").addEventListener("keyup", () => {

    let busqueda = document.getElementById("searchBar").value;
    
    if (busqueda.length >= 3) {

        gestorCocteles.buscarCocteles(busqueda);

    } else {

        gestorCocteles.mostrarExistencia("Todos los cocteles disponibles");
        gestorCocteles.solicitarData();

    }

    /* if (!busqueda) {

        coctelesBebidas_copia.forEach((coctel) => gestorCocteles.cargarCoctelesBebidas(coctel))

    } */

})