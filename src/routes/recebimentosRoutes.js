const route = require('express-promise-router')()
const recebimentosController = require('../controllers/recebimentosController')

route.get('/tipos_recebimentos', recebimentosController.getTypes)

route.get('/recebimentos_mes', recebimentosController.verRecebimentosMes)


route.post('/insere_recebimentos', recebimentosController.postEarnings)

route.post('/recebimentos_periodo', recebimentosController.verRecebimentosPeriodo)

module.exports = route