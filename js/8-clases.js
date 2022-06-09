
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
    constructor(comision, legajo, estado, nombre, apellido, nombreUsuario, password, email, direccion = 'sin direccion' ) {
    //    invocar al constructor de la clase usuario
        super(nombreUsuario, nombre, apellido, email, password, direccion);
        this.comision= comision;
        this.legajo = legajo;
        this.estado = estado; // true: activo, false: suspendido
        this.asistencia = 0; //propiedad por defecto
        this.notas=[];
    } 

    mostrarAlumno(){
        document.write(`<ul>
            <li>Comision: ${this.comision}</li>
            <li>Legajo: ${this.legajo}</li>
            <li>Estado: ${this.estado}</li>
            <li>Asistencia: ${this.asistencia}</li>
            <li>Notas: ${this.notas}</li>
        </ul>`);
    }

    mostrarDatos(){
        document.write(`<br>
        <ul>
            <li>Nombre: ${this.nombre}</li> 
            <li>Apellido: ${this.apellido} </li>
            <li>Correo: ${this.correo} </li>
            <li>Direccion: ${this.direccion} </li>
            <li>Nombre usuario: ${this.nombreUsuario} </li>
            <li>Comision: ${this.comision}</li>
            <li>Legajo: ${this.legajo}</li>
            <li>Estado: ${this.estado}</li>
            <li>Asistencia: ${this.asistencia}</li>
            <li>Notas: ${this.notas}</li>
        </ul>`)
    }

    deshabilitar(){
        this.estado = false;
    }
    habilitar(){
        this.estado = true;
    }
    // get y set

    set modificarEstado(nuevoEstado){
        this.estado = nuevoEstado;
    }
    get mostrarEstado(){
        return this.estado;
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

let alumnoMauro = new Alumno('2i',1233,true, 'Mauro', 'Garcia', 'mgarcia','3478kjdfhs','mauro@gmail.com','alguna direccion dgdfgdfg');
let alumnoDaniela = new Alumno('2i',1233,true, 'Daniela', 'Cardozo', 'mgarcia','3478kjdfhs','mauro@gmail.com','tucuman');
let alumnoHector = new Alumno('2i',1233,true, 'Hector', 'Norry', 'mgarcia','3478kjdfhs','mauro@gmail.com','tucuman');

alumnoMauro.mostrarDatos();
alumnoMauro.mostrarAlumno();
console.log(alumnoMauro)

console.log(alumnoMauro.mostrarDireccion);

alumnoMauro.deshabilitar()
console.log(alumnoMauro.mostrarEstado);
