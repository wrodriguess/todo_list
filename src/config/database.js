//Importação do mongoose
const mongoose = require('mongoose');

//Definindo a URL de conexão com o mongo
const url = 'mongodb://localhost:27017/todo_list'; //mongodb://localhost:PORTA/NOME_DO_BANCO

mongoose.connect(url, {useNewUrlParser: true}); //Conectando com o mongo utilizando a constante url 

module.exports = mongoose; //Exportanto o arquivo com o nome da constante mongoose