const { Tarefa: TarefaModel } = require("../models/Tarefa");
const TarefaController = {
    create: async (req, res) => {
        try {
          const tarefa = {
            assunto: req.body.assunto,
            data: req.body.data,
            descricao: req.body.descricao,
            contato: req.body.contato,
            situacao: req.body.situacao,
          };
          const response = await TarefaModel.create(tarefa);    
          res.status(201).json({ response, msg: "Criado com sucesso!" });
        } catch (error) {
          //em caso de erro retorne
          console.log(error);
          res.status(400).json({ msg: "Não foi possivel salvar" });
        }
      },
      getAll: async (req, res) => {
        try {
          const tarefas = TarefaModel.find();
          // response.status(200).json({data: tarefas})
          response.json(tarefas);
        } catch (error) {
          //em caso de erro retorne
          console.log(error);
          res.status(400).json({ msg: "Não foi possivel executar pesquisa" });
        }
      },
      get: async (req, res) => {
        try {
          const id = req.params.id;
          const tarefa = await TarefaModel.findById(id);
          if (!tarefa) {
            res.status(404).json({ msg: "Tarefa não encontrada!" });
            return;
          }
          res.json(tarefa);
        } catch (error) {
          console.log(error);
          res.status(400).json({ msg: "Não foi possivel executar pesquisa" });
        }
      },
};

module.exports = TarefaController;