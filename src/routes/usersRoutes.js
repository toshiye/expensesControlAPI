const route = require('express-promise-router')()
const usersController = require('../controllers/usersController')

route.get('/users', usersController.getAllUsers)

module.exports = route