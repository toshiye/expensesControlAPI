const db = require('../config/database')

exports.getTypes = async (req, res) => {
    const response = await db.query('SELECT * FROM financas.tipos_receber')
    res.status(200).send(response.rows)
}