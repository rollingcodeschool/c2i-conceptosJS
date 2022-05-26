// funciones sin parametro
function saludar()  {
    // todo el codigo que quiero que tenga esta funcion
    document.write('Hola mundo');
    let prueba = 'test';
}
// funcion con parametros
function saludarPersona(nombre, apellidoRecibido ){   
    document.write(`<br>Hola mi nombre es: ${nombre} y mi apellido es: ${apellidoRecibido}`); 
}

// funcion que retorna valor
function convertirDolaresAPesos(dolares){
    let pesosFinales = dolares * 210;
    return pesosFinales;
}

// invocar o llamar a una funcion
saludar();


let nombre = prompt('Ingrese un nombre');
let apellido = prompt('Ingrese un apellido');
let nombre1 = 'Jony'

saludarPersona(nombre,apellido);
saludarPersona('Daniela','Cardozo');
saludarPersona(nombre1,'Cardozo');

let pesosSinImpuestos = convertirDolaresAPesos(60);
document.write(`<br>Juego en pesos $ ${pesosSinImpuestos}`);