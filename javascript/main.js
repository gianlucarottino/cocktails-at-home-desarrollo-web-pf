// Inicializo clase Gestionar Cocteles
let gestorCocteles = new GestionarCocteles();

document.addEventListener("DOMContentLoaded", () => {

    gestorCocteles.solicitarData();
    
})

// Componente input de busqueda
const searchBar = document.querySelector("#searchBar");

// Agrego evento de busqueda segun lo que ingresa el usuario
searchBar.addEventListener("keyup", (event) => {

    let busqueda = event.target.value;

    if (busqueda.length >= 3) {

        gestorCocteles.buscarCocteles(busqueda);

    } else {

        // Busco con valor en string vacío para mostrar todos los cocteles
        gestorCocteles.buscarCocteles(""); 

    }
});

// Agrego evento a la equis del componente, para que muestre todos los cocteles
searchBar.addEventListener("search", () => {
    
    gestorCocteles.buscarCocteles("");

});