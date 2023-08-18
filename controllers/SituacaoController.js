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
    try {
      const situacao = {
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
      const situacoes = await SituacaoModel.find();
      // response.status(200).json({data: situacoes})
      res.json(situacoes);
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
    }
  },
  //Atualizar - Update
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const situacao = {
        name: req.body.nome,
      };
      const options = { new: true }; // Retorna o documento atualizado

      const situacaoAtualizada = await SituacaoModel.findByIdAndUpdate(id, situacao, options);

      if (!situacaoAtualizada) {
        res.status(404).json({ msg: "Situação não encontrada!" });
        return;      
      }

      res.status(200)
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
