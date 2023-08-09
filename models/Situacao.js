//Biblioteca que vai conversar com o mongodb
//npm install mongoose
const mongoose = require('mongoose')

const juroComposto = require('JuroComposto')

//Use metodo "destructor" para extrair o Schema
const { Schema } = mongoose

//Criar uma constante que sera exportada
//Inserir os dados do nosso banco de dados
const situacaoSchema = new Schema({
    nome : {
        type: String,
        required: true
    }
},{timestamps: true})

//Definir modelo no mongoose
const Situacao = mongoose.model("Situacao",situacaoSchema)

//Exportar constantes
module.exports = {
    Situacao,
    situacaoSchema
}
