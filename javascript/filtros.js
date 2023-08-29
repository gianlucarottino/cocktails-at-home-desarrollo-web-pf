// Filtros de ordenar

const divCocteles = document.getElementById("divBebidas");
let filtroOrderName = document.getElementById("orderName");
let filtroOrderStrength = document.getElementById("orderStrength");
let filtroOrderDate = document.getElementById("orderDate");

filtroOrderName.addEventListener("click", () => {
  gestorCocteles.orderAscendente = !gestorCocteles.orderAscendente;
  ordenarPorPropiedad("name");
})

filtroOrderStrength.addEventListener("click", () => {
  gestorCocteles.orderAscendente = !gestorCocteles.orderAscendente;
  ordenarPorPropiedad("strength");
})

filtroOrderDate.addEventListener("click", () => {
  gestorCocteles.orderAscendente = !gestorCocteles.orderAscendente;
  ordenarPorPropiedad("dateCharge");
})

function ordenarPorPropiedad(propiedad) {

  divCocteles.innerHTML = "";

  gestorCocteles.coctelesBebidas.sort((a, b) => {
    let valorA = a[propiedad];
    let valorB = b[propiedad];
    
    switch (typeof valorA) {

      case 'string':

        return gestorCocteles.orderAscendente
          ? valorA.localeCompare(valorB)
          : valorB.localeCompare(valorA);

      case 'number':

        return gestorCocteles.orderAscendente
          ? valorA - valorB
          : valorB - valorA;

      default:

        return 0;
    }

  });
  
  orderCarga();
}

function orderCarga() {

  gestorCocteles.coctelesBebidas.forEach((coctel) => {

    gestorCocteles.cargarCoctelesBebidas(coctel);

  });
}



// Filtros fuerza de alcohol

let filtroNoAlcohol = document.getElementById("filterNoAl");
let filtroSuave = document.getElementById("filterSuave");
let filtroMedio = document.getElementById("filterMedio");
let filtroFuerte = document.getElementById("filterFuerte");

function filtrarPorValor(propiedad, valor) {

  divCocteles.innerHTML = "";
  const copiaPrefiltrado = [...gestorCocteles.coctelesBebidas];

  let filtrados = copiaPrefiltrado.filter(coctel => {

    return coctel[propiedad] === valor;

  })
  
  if (filtrados.length > 0) {

    filtrados.forEach((coctel) => {
  
      gestorCocteles.cargarCoctelesBebidas(coctel);
  
    });
    
  } else {

    gestorCocteles.mostrarExistencia("No se encontraron resultados");

  }

}


filtroNoAlcohol.addEventListener("click", () => {

  filtrarPorValor("category","sin alcohol");

})



filtroSuave.addEventListener("click", () => {

  filtrarPorValor("category","suave");

})



filtroMedio.addEventListener("click", () => {

  filtrarPorValor("category","medio");

})



filtroFuerte.addEventListener("click", () => {

  filtrarPorValor("category","fuerte");

})

// Filtros igrendientes base

let ron = document.getElementById("filterRon");
let whisky = document.getElementById("filterWhisky");
let gin = document.getElementById("filterGin");
let tequila = document.getElementById("filterTequila");
let brandy = document.getElementById("filterBrandy");
let vodka = document.getElementById("filterVodka");
let champagne = document.getElementById("filterChampagne");


ron.addEventListener("click", () => {

  filtrarPorValor("principal","ron");

})

whisky.addEventListener("click", () => {

  filtrarPorValor("principal","whisky");

})

gin.addEventListener("click", () => {

  filtrarPorValor("principal","gin");

})

tequila.addEventListener("click", () => {

  filtrarPorValor("principal","tequila");

})

brandy.addEventListener("click", () => {

  filtrarPorValor("principal","brandy");

})

vodka.addEventListener("click", () => {

  filtrarPorValor("principal","vodka");

})

champagne.addEventListener("click", () => {

  filtrarPorValor("principal","champagne");

})


// Filtros dificultad

let muyBaja = document.getElementById("filterMB");
let baja = document.getElementById("filterBaja");
let media = document.getElementById("filterMedia");
let alta = document.getElementById("filterAlta");


muyBaja.addEventListener("click", () => {

  filtrarPorValor("dificult","muy baja");

})

baja.addEventListener("click", () => {

  filtrarPorValor("dificult","baja");

})

media.addEventListener("click", () => {

  filtrarPorValor("dificult","media");

})

alta.addEventListener("click", () => {

  filtrarPorValor("dificult","alta");

})
