// Clase para gestionar los cocteles de toda la página
class GestionarCocteles {
    
    constructor() {

        // Array de cocteles donde se va a cargar la solicitud, propio de la clase
        this.coctelesBebidas = [];
        // Variable timeout para poder hacer el retraso antes de la busqueda
        this.timeoutId = null;

    }
    
    // Metodo para solicitar datos a la base de datos 
    solicitarData() {
        // Ruta relativa a la base de datos creada manualmente desde index.html
        const api_url_inicio = "./javascript/db.json";
        // Ruta relativa a la base de datos creada manualmente desde bebidas.html
        const api_url_bebidas = "../javascript/db.json";

        // Peticion a la base de datos para los cocteles de la pagina inicio
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
        
        // peticion para los cocteles de la seccion de bebidas
        fetch(api_url_bebidas)
            .then((response) => response.json())
            .then((data) => {
                
                let cocteles = data.cocteles
                cocteles.forEach((coctel) => {
                    this.cargarCoctelesBebidas(coctel);
                    this.coctelesBebidas.push(coctel);
                })
            })
            .catch((error) => {
                console.error("Error: ", error);
            })
    }

    // Metodo para cargar los cocteles en Inicio
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

    // Metodo para cargar los cocteles en Bebidas
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
        cardBebidas.classList.add("creadoByDOM")

        divBebidas.appendChild(cardBebidas);
    }

    // Metodo para proporcionar feedback al usuario
    mostrarExistencia(mensaje) {

        let existencia = document.getElementById("mensajeExistencia");
        existencia.textContent = mensaje

    }

    // Metodo para agregar la funcionalidad de busqueda con retraso
    buscarCocteles(valor) {

        // Limpio el timeout anterior si existe
        clearTimeout(this.timeoutId); 

        // Funcion para realizar la busqueda despues de 200 ms
        this.timeoutId = setTimeout(() => {

            const divBebidas = document.getElementById("divBebidas");
            divBebidas.innerHTML = "";

            // Chequeo si el array de cocteles no esta vacio
            if (this.coctelesBebidas.length > 0) {

                // Si la busqueda tieen mas de 3 caracteres
                if (valor.length >= 3) {

                    // Realizo la busqueda por nombre y descripcion dentro del array
                    const resultado = this.coctelesBebidas.filter(coctel =>
                        coctel.name.toLowerCase().includes(valor.toLowerCase()) ||
                        coctel.description.toLowerCase().includes(valor.toLowerCase()));
                    
                    // Si el el array resultado, creado por la busqueda no es vacio
                    if (resultado.length > 0) {

                        // Doy feedback al usuario de que se encontro algo
                        this.mostrarExistencia("Se encontraron los siguientes resultados: ");

                        // Cargo en la interfaz los resultados encontrados
                        resultado.forEach((result) => {
                            this.cargarCoctelesBebidas(result);
                        });

                    } else {
                        
                        // De lo contrario, si el array resultado es vacio, doy feedback
                        this.mostrarExistencia("No se encontraron resultados");
                    }
                } else {

                    // Si el usuario no realizo la busqueda de 3 o mas caracteres
                    this.mostrarExistencia("Todos los cocteles disponibles");

                    this.coctelesBebidas.forEach((coctel) => {
                        this.cargarCoctelesBebidas(coctel);
                    });
                }
            }
        }, 200);
    }
}