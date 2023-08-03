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