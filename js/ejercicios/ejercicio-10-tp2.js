let filas = parseInt(prompt('Ingrese una cantidad de filas'));
let columnas = parseInt(prompt('Ingrese una cantidad de columnas'));

let resultado = filas * columnas;
console.log(resultado);

document.write(`<table> <tbody>`);
// aqui dibujo las filas y celdas
for(let indiceFila=0; indiceFila < filas; indiceFila++){
    // aqui dibujo las filas
    document.write('<tr>')
    //ahora dibujo las celdas
    for(let indiceColumna=0; indiceColumna < columnas; indiceColumna++){
        document.write(`<td>${resultado}</td>`);
        resultado--;
    } 
    document.write('</tr>')
}
document.write(`</tbody> </table> `);




// document.write(`<table> 
// <tbody> 
//     <tr> 
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//     </tr>
//     <tr> 
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//     </tr>
// </tbody> 
// </table>`)