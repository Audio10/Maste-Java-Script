'use strict';
window.addEventListener("load", ()=>{
    var fecha = new Date();
    var year = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDay();
    var textoHora = `
        El año es: ${year} 
        El mes es: ${mes}
        El dia es: ${dia}
    `;

    console.log(textoHora);

});