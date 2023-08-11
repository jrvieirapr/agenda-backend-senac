const router = require("express").Router()

const situacaoController = require("../controllers/SituacaoController")

router.route("/situacoes").post((req, res) => situacaoController.create(req, res))
router.route("/situacoes").get((req, res) => situacaoController.getAll(req, res))
router.route("/situacoes/:id").get((req, res) => situacaoController.get(req, res))
router.route("/situacoes/:id").delete((req, res) => situacaoController.delete(req, res))
router.route("/situacoes/:id").put((req, res) => situacaoController.update(req, res))
module.exports = router;