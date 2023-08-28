// Clase para crear objetos de tipo usuario a traves de los parametros ingresados
class Usuario {

    constructor (usuario, contraseña, nombre, apellido, edad){

        this.usuario = usuario;
        this.contraseña = contraseña;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }

    getUser() {

        return this.usuario;

    }

    setUser(nuevo_usuario) {

        this.usuario = nuevo_usuario;

    }

    getDatos() {

        return this.nombre + this.apellido + this.edad;

    }
}