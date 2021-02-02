const express = require('express')
const route = express.Router()

route.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Está fucionando!!!',
        version: '1.0.0'
    })
})

module.exports = route