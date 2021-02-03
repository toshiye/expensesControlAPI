const route = require('express-promise-router')()
const usersController = require('../controllers/usersController')

route.get('/users', usersController.getAllUsers)

route.post('/new_user', usersController.newUser)

route.put('/update_user/:id', usersController.updateUser)

route.delete('/delete_user/:id', usersController.deleteUser)

module.exports = route