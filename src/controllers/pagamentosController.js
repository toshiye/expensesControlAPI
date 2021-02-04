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
        "INSERT INTO financas.pagar (id_tipo_pagar, descricao, valor, data_vencimento, data_pagamento, desconto, juros) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
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

exports.verPagamentosMes = async(req, res) => {
    const hoje = new Date()
    const y = hoje.getFullYear()
    const m = hoje.getMonth()
    const firstDay = new Date(y, m, 1)
    const lastDay = new Date(y, m + 1, 0)
    const response = await db.query(
        'SELECT descricao, valor, data_vencimento FROM financas.pagar WHERE data_vencimento > $1 AND data_vencimento < $2', 
        [firstDay, lastDay]
    )

    /* for(item of response.rows){
        console.log(item.descricao)
    } */

    res.status(200).send(response.rows)
}

exports.verPagamentosPeriodo = async(req, res) => {
    const { 
        dataInicial, dataFinal
    } = req.body

    const response = await db.query(
        'SELECT descricao, valor, data_vencimento FROM financas.pagar WHERE data_vencimento >= $1 AND data_vencimento <= $2',
        [dataInicial, dataFinal]
    )

    res.status(200).send(response.rows)
}