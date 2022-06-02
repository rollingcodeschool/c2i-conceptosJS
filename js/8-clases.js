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
    cambiarPassword(){
        document.write('<br>Cambiando el password...');
    }

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
}

// Como crear un objeto o instancia
let userValentina = new Usuario('valeOrmaechea','Valentina', 'Ormaechea','valeOrmaechea@gmail.com','12345678A', '-');
let userJuan = new Usuario('Menichetti','juan pablo', 'Menichetti','Menichetti@gmail.com','12sdfsdf5678A', '-');

console.log(userValentina);

userValentina.mostrarDatos();
userJuan.mostrarDatos();