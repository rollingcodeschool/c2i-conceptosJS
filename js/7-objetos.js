// let memoria = '16RAM';
// let pantalla = 7;
// let almacenamiento = '128GB';
// let camara = true;
// let SO = 'Android';

// notacion literal para crear un objeto
let usuarioFrancisco = {
    // propiedad:valor,
    nombreUsuario: 'fran',
    password: 'A$34576sdf',
    nombre: 'Francisco',
    apellido: 'Andrade',
    correo: 'fran@gmail.com',
    estado: true,
    // metodos o funciones
    cambiarPassword: () =>{
        document.write('<br>Nuevo password');
    }
}

// mostrar un objeto
document.write(usuarioFrancisco);
console.log(usuarioFrancisco);

// mostrar propiedades de un 1 objeto (forma 1)
document.write(`<br>Nombre de usuario: ${usuarioFrancisco.nombreUsuario}`);
// mostrar propiedades de un 1 objeto (forma 2)
document.write(`<br>Correo: ${usuarioFrancisco['correo']}`);

// modificar una propiedad del objeto
usuarioFrancisco.estado = false;
document.write(`<br>Estado: ${usuarioFrancisco.estado}`);

// agregamos una propiedad nueva al objeto
usuarioFrancisco.direccion = 'Tucuman';
document.write(`<br>Direccion: ${usuarioFrancisco.direccion}`);

// invocar a un metodo del objeto
usuarioFrancisco.cambiarPassword();

// crear un bucle que muestre todo el objeto
let claves = Object.keys(usuarioFrancisco); // ['nombreUsuario','nombre','...','cambiarPassword']
console.log(claves);

console.log(usuarioFrancisco.length)
for(let indice=0; indice < claves.length; indice++){
    document.write(`<br>${claves[indice]}: ${usuarioFrancisco[claves[indice]]}`)
}