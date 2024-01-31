const express = require("express"); // Inicializando a biblioteca

const servidor = express(); // Instanciando

const arrayDeObjetos = [
  {
    id: 11,
    nome: "João",
    idade: 23,
  },
  {
    id: 2,
    nome: "Maria",
    idade: 18,
  },
  {
    id: 4,
    nome: "Ana",
    idade: 30,
  },
  {
    id: 1,
    nome: "Rodrigo",
    idade: 19,
  },
  {
    id: 123,
    nome: "Ricardo",
    idade: 27,
  },
];

servidor.get("/usuarios", (request, response) => {
  response.send(arrayDeObjetos);
});

servidor.listen(3000, () => {
  console.log("Servidor inicializado !");
}); // Criando a port de acesso
