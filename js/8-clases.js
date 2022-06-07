
// comision, antiguedad, horarios: (part-time, full-time), tipo de contrato 
// crear una clase
class Usuario{
    //primero creamos un metodo constructor
    constructor(nombreUsuarioParam, nombreParam, apellidoParam, correoParam, passwordParam, direccionParam){
        this.nombreUsuario =  nombreUsuarioParam;
        this.password = passwordParam;
        this.apellido = apellidoParam;
        this.nombre = nombreParam;
        this.correo = correoParam;
        this.direccion = direccionParam;
    }
    // definir los metodos
     mostrarDatos(){
        document.write(`<br>
        <ul>
            <li>Nombre: ${this.nombre}</li> 
            <li>Apellido: ${this.apellido} </li>
            <li>Correo: ${this.correo} </li>
            <li>Direccion: ${this.direccion} </li>
            <li>Nombre usuario: ${this.nombreUsuario} </li>
        </ul>`)
    }

    cambiarPassword(){
        document.write('<br>Cambiando el password...');
    }

    // propiedades conmutadas get y set
    get mostrarNombreUsuario(){
        return this.nombreUsuario;
    }

    get mostrarDireccion(){
        return this.direccion;
    }
    // setter
    set modificarDireccion(nuevaDireccion ){
        this.direccion = nuevaDireccion;
    }

}
// clase alumno que hereda de usuario
// comision, notas, legajo, estado, asistencia
class Alumno extends Usuario {
    //primer metodo
    constructor(comision, legajo, estado, nombre, apellido, nombreUsuario, password, email, direccion ) {
    //    invocar al constructor de la clase usuario
        super(nombreUsuario, nombre, apellido, email, password, direccion);
        this.comision= comision;
        this.legajo = legajo;
        this.estado = estado
    } 
}

// Como crear un objeto o instancia
let userValentina = new Usuario('valeOrmaechea','Valentina', 'Ormaechea','valeOrmaechea@gmail.com','12345678A', '-');
let userJuan = new Usuario('Menichetti','juan pablo', 'Menichetti','Menichetti@gmail.com','12sdfsdf5678A', '-');

console.log(userValentina);

userValentina.mostrarDatos();
userJuan.mostrarDatos();

document.write(`El nombre del usuario es ${userValentina.mostrarNombreUsuario}`);
document.write(`<br>La direccion del usuario ${userJuan.mostrarNombreUsuario} es ${userJuan.mostrarDireccion}`);

userJuan.modificarDireccion = 'Tucumán'
document.write(`<br>La direccion del usuario ${userJuan.mostrarNombreUsuario} es ${userJuan.mostrarDireccion}`);

