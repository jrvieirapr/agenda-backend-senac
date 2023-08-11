//Importação padrao JS
//import apelido from 'endereco do arquivo'
//Servidor Backend
const express = require('express')

//Camada de segurança
const cors = require('cors')

//Declara e inicializa a variavel do servidor
const app = express()

//Dizer pro app usar o que foi importado
app.use(cors)

//Trabalhar com json
app.use(express.json())

//db connection

const conn = require("./db/conn")

conn()

//Routes

const routes = require("./routes/router")

app.use("/api", routes)


// Inicializar o Servidor
//digitar no terminal npm start
app.listen(3001, function () {
    console.log(`Servidor Online!!`)
})

//.\user
//senac123456

//usario metratonpr
//senha 96w0Ukaqk8rXZRLS