// declarar o crear un arreglo
let usuarios = [];
let series = ["Naruto", 2, "GOT", 8, "Rick and Morty", 4];

const imprimirArreglo = (titulo) => {
  document.write("<hr>");
  document.write(`<h3>${titulo}</h3>`);
  // bucle para mostrar todos los elementos del arreglo
  for (let posicion = 0; posicion < series.length; posicion++) {
    document.write("<br>Elemento: " + series[posicion]);
  }
};

document.write(series);
// acceder a un elemento del arreglo
document.write("<br>" + series[0]);
document.write("<br>" + series[4]);
console.log(series.length);

// bucle para mostrar todos los elementos del arreglo
imprimirArreglo('Arreglo original');

// cuando accedemos a elementos que no existen en el arreglo
document.write("<br>" + series[10]);

// agregar un elemento al final del arreglo
series.push("Ozark");
imprimirArreglo('Se agrego un nuevo item al arreglo');

// agregar un elemento en una posicion particular
series.splice(3, 0, "Breaking Bad");
imprimirArreglo('Se agrego un item en una posicion particular del arreglo');

// eliminar elementos desde una posicion particular
// series.splice(5,2); //(posicion del elemento, cantidad de elementos a eliminar);
series.splice(7); //desde la posicion 5 borro todos los items a la derecha
imprimirArreglo('Eliminar un item del arreglo');

// modificar un elemento del arreglo
series[6] = true;
imprimirArreglo('modificar el item de la posicion 7');
