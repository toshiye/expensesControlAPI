const express = require('express')
const cors = require('cors')

const app = express()

const index = require('./routes/index')
const users = require('./routes/usersRoutes')
const pagamentos = require('./routes/pagamentosRoutes')
const recebimentos = require('./routes/recebimentosRoutes')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api/', users)
app.use('/api/', pagamentos)
app.use('/api/', recebimentos)

module.exports = app
