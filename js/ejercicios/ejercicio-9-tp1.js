// confirm('quiere continuar con el programa');
let frase = prompt('Ingrese una frase');
frase = frase.toLowerCase();
// perro
// length devuelve la cantidad de caracteres
console.log(frase.length);
console.log(frase.substring(0,1));

for(let indice =0; indice < frase.length; indice++){
    if(frase.charAt(indice) === 'a' ||  frase.charAt(indice) === 'e' || frase.charAt(indice) === 'i' || frase.charAt(indice) === 'o' || frase.charAt(indice) === 'u'){
        document.write(frase.charAt(indice));
    }
}

// if(frase.substring(0,1) === 'a' ||  frase.substring(0,1) === 'e' || frase.substring(0,1) === 'i' || frase.substring(0,1) === 'o' || frase.substring(0,1) === 'u'){
//     document.write(frase.substring(0,1))
// }

// if(frase.substring(1,2) === 'a' ||  frase.substring(1,2) === 'e' || frase.substring(1,2) === 'i' || frase.substring(1,2) === 'o' || frase.substring(1,2) === 'u'){
//     document.write(frase.substring(1,2))
// }

// if(frase.substring(2,3) === 'a' ||  frase.substring(2,3) === 'e' || frase.substring(2,3) === 'i' || frase.substring(2,3) === 'o' || frase.substring(2,3) === 'u'){
//     document.write(frase.substring(2,3))
// }
// if(frase.substring(3,4) === 'a' ||  frase.substring(3,4) === 'e' || frase.substring(3,4) === 'i' || frase.substring(3,4) === 'o' || frase.substring(3,4) === 'u'){
//     document.write(frase.substring(3,4))
// }

// if(frase.substring(4,5) === 'a' ||  frase.substring(4,5) === 'e' || frase.substring(4,5) === 'i' || frase.substring(4,5) === 'o' || frase.substring(4,5) === 'u'){
//     document.write(frase.substring(4,5))
// }

