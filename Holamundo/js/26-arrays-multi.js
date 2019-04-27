'use strict'
//0
var categorias = ["Accion", "Terror", "Comedia"];
//1
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

//            0          1
var cine = [categorias, peliculas];

do {
    var element = prompt("Inserta una pelicula", "");
    if (element.length != 0 && element.toLowerCase() != "acabar") peliculas.push(element);
    
    console.log(peliculas);
} while (element.toLowerCase() != "acabar");

// pop() saca el ultimo como en una lista
console.log(peliculas.pop());
console.log(peliculas.indexOf("Gran torino"));



document.write("<h1> peliculas</h1>");
document.write("<ul>");
peliculas.forEach( (elemento, indice)=>{
    document.write("<li>"+indice+".-  "+elemento+"</li>");
} );
// peliculas.join();   Genera un String del array.

document.write("</ul>");