'use strict'

var vector = ["Manzana","Pera","Mamey","Platano","Durazno"];

document.write("<h1> Frutas</h1>");
document.write("<ul>");
vector.forEach( (elemento, indice)=>{
    document.write("<li>"+indice+".-  "+elemento+"</li>");
} );

document.write("</ul>");
