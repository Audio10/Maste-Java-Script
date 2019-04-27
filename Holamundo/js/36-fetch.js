"use strict";
window.addEventListener("load", () => {
  var usuarios = [];
  var div_usuarios = document.querySelector("#usuarios");
  var div_janet = document.querySelector("#janet");
  var div_profesor = document.querySelector("#profesor");
  //Fetch (sustituto de ajax) y peticiones a servicios / apis rest

  getUsuarios()
    .then(data => data.json())
    .then(users => {
      listadoUsuarios(users);

      return getJanet();
    })
    .then(data => data.json())
    .then(user => {
      mostrarJanet(user);

      return getInfo();
    })
    .then(data => {
      console.log(data);
      div_profesor.innerHTML = data;
    }).catch(error =>{
        console.log("error");
    });

  function getUsuarios() {
    return fetch("https://jsonplaceholder.typicode.com/users");
  }

  function getJanet() {
    return fetch("https://jsonplaceholder.typicode.com/users/2");
  }

  function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
      var nombre = document.createElement("h2");
      nombre.innerHTML = i + 1 + ".- " + user.name;
      div_usuarios.appendChild(nombre);

      document.querySelector(".loading").style.display = "none";
    });
  }

  function mostrarJanet(user) {
    var nombre = document.createElement("h4");
    nombre.innerHTML = user.name;
    div_janet.appendChild(nombre);

    document.querySelector("#janet .loading").style.display = "none";
  }

  function getInfo() {
    var profesor = {
      nombre: "Victor",
      apellidos: "robles",
      url: "https://victorroblesweb.es"
    };

    return new Promise((resolve, reject) => {
      var profesor_string = "";
      setTimeout(() => {
        profesor_string = JSON.stringify(profesor);
        if (typeof profesor_string != "string" || profesor_string == "")
          return reject("error 1");
        return resolve(profesor_string);
      }, 3000);
    });
  }
});
