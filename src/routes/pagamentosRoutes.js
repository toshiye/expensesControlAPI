const route = require('express-promise-router')()
const pagamentosController = require('../controllers/pagamentosController')

route.get('/tipos_pagamentos', pagamentosController.getTypes)

route.post('/insere_pagamento', pagamentosController.postPayment)

module.exports = route