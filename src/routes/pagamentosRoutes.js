const route = require('express-promise-router')()
const pagamentosController = require('../controllers/pagamentosController')

route.get('/tipos_pagamentos', pagamentosController.getTypes)

route.get('/pagamentos_mes', pagamentosController.verPagamentosMes)


route.post('/insere_pagamento', pagamentosController.postPayment)

route.post('/pagamentos_periodo', pagamentosController.verPagamentosPeriodo)

module.exports = route