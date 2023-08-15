const router = require("express").Router()

const tarefaController = require("../controllers/TarefaController")
//POST - Formularios de dados para salvar ou usuario e senhas
router.route("/tarefas").post((req, res) => tarefaController.create(req, res))
//GET - geralmente vou usar quando eu quiser fazer algum tipo de pesquisa
router.route("/tarefas").get((req, res) => tarefaController.getAll(req, res))
router.route("/tarefas/:id").get((req, res) => tarefaController.get(req, res))
//PUT - utilizado para atualizar o registro
router.route("/tarefas/:id").put((req, res) => tarefaController.update(req, res))
//DELETE - quando eu precisar remover
router.route("/tarefas/:id").delete((req, res) => tarefaController.delete(req, res))
//OPTION - verificação antecipada

module.exports = router;
//tarefaController - TarefaController