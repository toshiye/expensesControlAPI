const db = require('../config/database')

exports.getTypes = async (req, res) => {
    const response = await db.query('SELECT * FROM financas.tipos_receber')
    res.status(200).send(response.rows)
}

exports.postEarnings = async (req, res) => {
    const {
        idTipoReceber, descricao, valor, dataRecebimento
    } = req.body
    console.log(req.body)
    const { rows } = await db.query(
        "INSERT INTO financas.receber (id_tipo_receber, descricao, valor, data_recebimento) VALUES ($1, $2, $3, $4)",
        [idTipoReceber, descricao, valor, dataRecebimento]
    )

    console.log(rows)

    res.status(201).send({
        message: 'Dados atualizados',
        body: {
            dados: {
                idTipoReceber, descricao, valor, dataRecebimento
            }
        }
    })
}