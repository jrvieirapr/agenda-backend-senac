const router = require("express").Router()

//Situacao routes
const situacaoRouter = require("./situacoes")
router.use("/",situacaoRouter)

//Tarefa routes
const tarefasRouter = require("./tarefas")
router.use("/",tarefasRouter)


module.exports = router;