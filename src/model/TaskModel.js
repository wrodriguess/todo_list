//Representação da estrutura da tarefa que será armazenada no banco de dados

//Importando o arquivo de conexão com o banco, que devolve o mongoose conectado
const mongoose = require('../config/database'); 

//Representação de informações que serão armazenadas no banco
const TaskSchema = new Schema({
    //Atributo: {type: TipoDaInformação, required: true}
    macaddress: {type: String, required: true},
    type: {type: Number, required: true},
    title: {type: String, required: true}, 
    description: {type: String, required: true},
    when: {type: Date, required: true},
    done: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()}
});

//Exportando o módulo 
//mongoose.model('NOME_DA_TABELA_NO_BD', Objeto que irá popular o banco);
module.exports = mongoose.model('Task', TaskSchema);