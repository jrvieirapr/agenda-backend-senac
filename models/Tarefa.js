//Importar o Moongose
const mongoose = require('mongoose')

//Importar Situacao
const { situacaoSchema } = require('Situacao')
//Extrair o schema
const { Schema } = mongoose
//Criar o modelo
const tarefaSchema = new Schema({
    assunto :{
        type: String,
        required: true
    },
    data :{
        type: Date,
        required: true
    },
    descricao :{
        type: String,
        required: true
    },
    contato :{
        type: String,
        required: true
    },
    situacao :{
        type: [situacaoSchema],
        required: true
    }
},{timestamps: true})
//Definir o modelo no moongose
const Tarefa = mongoose.model('Tarefa',tarefaSchema)
//Exportar
module.exports = {
    Tarefa,
    tarefaSchema
}
