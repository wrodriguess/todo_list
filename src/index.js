//Importando o express
const express = require('express');

//Inicializando o servidor
const server = express();

//Criando uma rota de teste para o servidor
server.get('/teste', (req, res) => {
    res.send('Hello World!');
});

//Fique 'escutando' a porta 3000
server.listen(3000, () => {
    console.log('API Online');
});