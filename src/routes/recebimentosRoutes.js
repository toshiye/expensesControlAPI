const route = require('express-promise-router')()
const recebimentosController = require('../controllers/recebimentosController')

route.get('/tipos_recebimentos', recebimentosController.getTypes)

route.post('/insere_recebimentos', recebimentosController.postEarnings)

module.exports = route