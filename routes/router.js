const router = require("express").Router()

//Statuses routes
const situacaoRouter = require("./situacoes")
router.use("/",situacaoRouter)

//Job routes
const tarefasRouter = require("./tarefas")
router.use("/",tarefasRouter)


module.exports = router;