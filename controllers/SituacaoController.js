//Importar meu modelo
//Importar ./ quando o arquivo esta na mesma pasta
//Importar ../ quando esta em outra pasta
//para cada nivel eu preciso usar ../
//C:\Users\9310\Documents\agenda-backend\controllers
//C:\Users\9310\Documents\agenda-backend\models
//Visual Code - ext chamada autoimport
const { Situacao: SituacaoModel } = require("../models/Situacao")

const SituacaoController = {

    //CRUD
    //Criar - Create
    create: async (req, res) => {
        //sincrono: executa na sequencia
        //assincrono: executa em paralelo ou fora de sincronia
        //req - request o que o usuario quer ver ou salvar ou pesquisar
        //res - response a resposta do servidor
        //POST - envia dados no corpo(body) da requisição
        try {
            //tente fazer algo
            //data ou nome do modelo
            //$data php e muito comum $data = $request->all()
            //const data = req.body
            const situacao = {
                // nome: res.data.nome
                nome: req.body.nome
            }
            const response = await SituacaoModel.create(situacao)

            res.status(201).json({response, msg:"Criado com sucesso!"})

        } catch (error) {
            //em caso de erro retorne
            console.log(error)
            res.status(400).json({msg: "Não foi possivel salvar"})

        }
    }
    //Ler - Read
    //Atualizar - Update
    //Remover - Delete
}

module.exports = SituacaoController