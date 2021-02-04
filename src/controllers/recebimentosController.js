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

exports.verRecebimentosMes = async(req, res) => {
    const hoje = new Date()
    const y = hoje.getFullYear()
    const m = hoje.getMonth()
    const firstDay = new Date(y, m, 1)
    const lastDay = new Date(y, m + 1, 0)
    const response = await db.query(
        'SELECT descricao, valor, data_recebimento FROM financas.receber WHERE data_recebimento > $1 AND data_recebimento < $2', 
        [firstDay, lastDay]
    )

    /* for(item of response.rows){
        console.log(item.descricao)
    } */

    res.status(200).send(response.rows)
}

exports.verRecebimentosPeriodo = async(req, res) => {
    const { 
        dataInicial, dataFinal
    } = req.body

    const response = await db.query(
        'SELECT descricao, valor, data_recebimento FROM financas.receber WHERE data_recebimento >= $1 AND data_recebimento <= $2',
        [dataInicial, dataFinal]
    )

    res.status(200).send(response.rows)
}