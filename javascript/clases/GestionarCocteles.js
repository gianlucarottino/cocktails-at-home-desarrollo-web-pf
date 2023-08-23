class GestionarCocteles {

    solicitarData() {
        // Ruta relativa a la base de datos creada manualmente
        const api_url_inicio = "./javascript/db.json";
        const api_url_bebidas = "../javascript/db.json";

        // Peticion a la base de datos
        fetch(api_url_inicio)
            .then((response) => response.json())
            .then((data) => {
                let cocteles = data.cocteles
                cocteles.forEach((coctel) => {
                    this.cargarCoctelesHome(coctel)
                })
            })
            .catch((error) => {
                console.error("Error: ", error);
            })
        
        fetch(api_url_bebidas)
            .then((response) => response.json())
            .then((data) => {
                
                let cocteles = data.cocteles
                coctelesBebidas = [];
                cocteles.forEach((coctel) => {
                    this.cargarCoctelesBebidas(coctel);
                    coctelesBebidas.push(coctel);
                })
            })
            .catch((error) => {
                console.error("Error: ", error);
            })
    }

    cargarCoctelesHome(coctel) {
        const divCocteles = document.getElementById("divCocteles");

        let cardCocktail = document.createElement("div");
        cardCocktail.classList = "card-cocktail";
        cardCocktail.innerHTML = `
                                    <div class="img-container">
                                        <img src="./images/${coctel.image}" alt="" />
                                    </div>
                                    <div class="text-container">
                                        <div class="name-and-ratio-container">
                                            <p class="card-name">${coctel.name}</p>
                                            <div class="card-valoration">
                                                <img src="./images/five-star-icon.png" alt="valoracion 5 estrellas"/>
                                            </div>
                                        </div>
                                        <div class="description-container">
                                            <p class="card-text">
                                                ${coctel.description}
                                            </p>
                                        </div>
                                    </div>`;

        divCocteles.appendChild(cardCocktail);
    }

    cargarCoctelesBebidas(coctel) {
        
        const divBebidas = document.getElementById("divBebidas");

        let cardBebidas = document.createElement("div");
        cardBebidas.innerHTML = `<div class="card-bebidas ${coctel.classBg}">
                                    <div class="linear-gradient">
                                        <div class="card-text">
                                            <h4>${coctel.name}</h4>
                                            <!-- card buttons -->
                                            <div class="buttons-container">
                                                <button class="button secondary">
                                                    <i class="fa-regular fa-heart fa-xl"></i>
                                                </button>
                                                <button class="button primary">Ver receta
                                                    <i class="fa-solid fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `

        divBebidas.appendChild(cardBebidas);
    }

    mostrarExistencia(mensaje) {

        let existencia = document.getElementById("mensajeExistencia");
        existencia.textContent = mensaje

    }

    buscarCocteles(valor) {

        const divBebidas = document.getElementById("divBebidas");
        divBebidas.innerHTML = "";
        

        if (coctelesBebidas.length > 0) {

            const resultado = coctelesBebidas.filter(coctel => 
                coctel.name.toLowerCase().includes(valor.toLowerCase()) || 
                coctel.description.toLowerCase().includes(valor.toLowerCase()));
    
    
            if (resultado.length > 0 ) {
    
                this.mostrarExistencia("Se encontraron los siguientes resultados: ");
                resultado.forEach((result) => {

                    this.cargarCoctelesBebidas(result)
                    console.log(result);
                    
                })

            } else {
    
                this.mostrarExistencia("No se encontraron resultados");
    
            }

            let busqueda = document.getElementById("searchBar").value;

            if (!busqueda) {

                

            }
        }
    }
}

