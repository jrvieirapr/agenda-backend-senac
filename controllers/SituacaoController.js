//Importar meu modelo
//Importar ./ quando o arquivo esta na mesma pasta
//Importar ../ quando esta em outra pasta
//para cada nivel eu preciso usar ../
//C:\Users\9310\Documents\agenda-backend\controllers
//C:\Users\9310\Documents\agenda-backend\models
//Visual Code - ext chamada autoimport
const { Situacao: SituacaoModel } = require("../models/Situacao");

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
        nome: req.body.nome,
      };
      const response = await SituacaoModel.create(situacao);

      res.status(201).json({ response, msg: "Criado com sucesso!" });
    } catch (error) {
      //em caso de erro retorne
      console.log(error);
      res.status(400).json({ msg: "Não foi possivel salvar" });
    }
  },
  //Ler - Read
  getAll: async (req, res) => {
    try {
      const situacoes = SituacaoModel.find();
      // response.status(200).json({data: situacoes})
      response.json(situacoes);
    } catch (error) {
      //em caso de erro retorne
      console.log(error);
      res.status(400).json({ msg: "Não foi possivel executar pesquisa" });
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const situacao = await SituacaoModel.findById(id);
      if (!situacao) {
        res.status(404).json({ msg: "Situação não encontrada!" });
        return;
      }
      res.json(situacao);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: "Não foi possivel executar pesquisa" });
    }
  },
  //Atualizar - Update
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const Situacao = {
        name: req.body.nome,
      };
      const situacaoAtualizada = await SituacaoModel.findByIdAndUpdate(
        id,
        Situacao
      );
      if (!situacaoAtualizada) {
        res.status(404).json({ msg: "Situação não encontrada!" });
        return;
      }
      res
        .status(200)
        .json({ situacaoAtualizada, msg: "Situação atualizada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  //Remover - Delete
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const situacao = await SituacaoModel.findById(id);
      if (!situacao) {
        res.status(404).json({ msg: "Situação não encontrada!" });
        return;
      }
      const situacaoDeletada= await SituacaoModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ situacaoDeletada, msg: "Situação deletado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = SituacaoController;
