// Filtros de ordenar

let filtroOrderName = document.getElementById("orderName");
let orderAscendente = true

filtroOrderName.addEventListener("click", () => {

  orderAscendente = !orderAscendente;
  ordenarNombre();

})

function ordenarNombre() {

  const divCocteles = document.getElementById("divBebidas")
  divCocteles.innerHTML = "";

  coctelesBebidas.sort(function(a,b) {

    let nombreA = a.name.toLowerCase();
    let nombreB = b.name.toLowerCase();

    return orderAscendente ? nombreA.localeCompare(nombreB) : nombreB.localeCompare(nombreA);

  })
  
  coctelesBebidas.forEach(coctel => {

    gestorCocteles.cargarCoctelesBebidas(coctel);
    
  });
  
}

let filtroOrderStrength = document.getElementById("orderStrength");

filtroOrderStrength.addEventListener("click", () => {

  inProgress();

})

let filtroOrderDate = document.getElementById("orderDate");

filtroOrderDate.addEventListener("click", () => {

  inProgress();

})

// Filtros fuerza de alcohol

let filtroNoAlcohol = document.getElementById("filterNoAl");

filtroNoAlcohol.addEventListener("click", () => {

  inProgress();

})

let filtroSuave = document.getElementById("filterSuave");

filtroSuave.addEventListener("click", () => {

  inProgress();

})

let filtroMedio = document.getElementById("filterMedio");

filtroMedio.addEventListener("click", () => {

  inProgress();

})

let filtroFuerte = document.getElementById("filterFuerte");

filtroFuerte.addEventListener("click", () => {

  inProgress();

})

// Filtros igrendientes base

let ron = document.getElementById("filterRon");

ron.addEventListener("click", () => {

  inProgress();

})
let whisky = document.getElementById("filterWhisky");

whisky.addEventListener("click", () => {

  inProgress();

})
let gin = document.getElementById("filterGin");

gin.addEventListener("click", () => {

  inProgress();

})
let tequila = document.getElementById("filterTequila");

tequila.addEventListener("click", () => {

  inProgress();

})
let brandy = document.getElementById("filterBrandy");

brandy.addEventListener("click", () => {

  inProgress();

})
let vodka = document.getElementById("filterVodka");

vodka.addEventListener("click", () => {

  inProgress();

})
let champagne = document.getElementById("filterChampagne");

champagne.addEventListener("click", () => {

  inProgress();

})


// Filtros dificultad

let muyBaja = document.getElementById("filterMB");

muyBaja.addEventListener("click", () => {

  inProgress();

})
let baja = document.getElementById("filterBaja");

baja.addEventListener("click", () => {

  inProgress();

})
let media = document.getElementById("filterMedia");

media.addEventListener("click", () => {

  inProgress();

})
let alta = document.getElementById("filterAlta");

alta.addEventListener("click", () => {

  inProgress();

})
