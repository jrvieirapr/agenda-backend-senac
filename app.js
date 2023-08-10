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


// Inicializar o Servidor
//digitar no terminal npm start
app.listen(3000, function () {
    console.log(`Servidor Online!!`)
})

//.\user
//senac123456

//usario metratonpr
//senha 96w0Ukaqk8rXZRLS