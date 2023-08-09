//Biblioteca que vai conversar com o mongodb (driver)
//npm install mongoose
//para cada banco de dados existe um driver
const mongoose = require('mongoose')

//Use metodo "destructor" para extrair o Schema
const { Schema } = mongoose

//Criar uma constante que sera exportada
//Inserir os dados do nosso banco de dados
const situacaoSchema = new Schema({
    nome : {
        type: String, //tipo: Texto
        required: true //Campo obrigatorio
    }
},{timestamps: true})

//timestamps: criado em e atualizado em

//Definir modelo no mongoose
const Situacao = mongoose.model("Situacao",situacaoSchema)

//Exportar constantes
module.exports = {
    Situacao,
    situacaoSchema
}
