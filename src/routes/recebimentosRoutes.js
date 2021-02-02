const route = require('express-promise-router')()
const recebimentosController = require('../controllers/recebimentosController')

route.get('/tipos_recebimentos', recebimentosController.getTypes)

module.exports = route