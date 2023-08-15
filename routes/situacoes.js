const router = require("express").Router()

const situacaoController = require("../controllers/SituacaoController")
//POST - Formularios de dados para salvar ou usuario e senhas
router.route("/situacoes").post((req, res) => situacaoController.create(req, res))
//GET - geralmente vou usar quando eu quiser fazer algum tipo de pesquisa
router.route("/situacoes").get((req, res) => situacaoController.getAll(req, res))
router.route("/situacoes/:id").get((req, res) => situacaoController.get(req, res))
//PUT - utilizado para atualizar o registro
router.route("/situacoes/:id").put((req, res) => situacaoController.update(req, res))
//DELETE - quando eu precisar remover
router.route("/situacoes/:id").delete((req, res) => situacaoController.delete(req, res))
//OPTION - verificação antecipada

module.exports = router;
//export default SituacaoController