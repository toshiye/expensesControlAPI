const db = require('../config/database')

exports.getTypes = async (req, res) => {
    const response = await db.query('SELECT * FROM financas.tipos_pagar')
    res.status(200).send(response.rows)
}

exports.postPayment = async (req, res) => {
    const {
        idTipoPagar, descricao, valor, dataVencimento, dataPagamento, desconto, juros
    } = req.body
    const { rows } = await db.query(
        "INSERT INTO financas.pagar VALUES ($1, $2, $3, $4, $5, $6, $7)", 
        [idTipoPagar, descricao, valor, dataVencimento, dataPagamento, desconto, juros]
    )

    res.status(201).send({
        message: 'Dados atualizados',
        body: {
            dados: {
                descricao, valor, dataVencimento, dataPagamento, desconto, juros
            }
        }
    })
}