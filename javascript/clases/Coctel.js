class Coctel {

    constructor (nombre_coctel, ingredientes, preparacion) {

        this.nombre_coctel = nombre_coctel;
        this.ingredientes = ingredientes;
        this.preparacion = preparacion;
        this.id = -1

    }

    setId(nuevo_id) {

        this.id = nuevo_id;

    }

    mostrarDescripcion() {

        return("#" + this.id + " - " + this.nombre_coctel + " - " + this.ingredientes + " - " + this.preparacion);

    }
}