const db = require('../config/database')

exports.getAllUsers = async (req, res) => {
    const response = await db.query('SELECT * FROM financas.users')
    res.status(200).send(response.rows)
}