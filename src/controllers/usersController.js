const db = require('../config/database')
const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(14)

exports.getAllUsers = async (req, res) => {
    const response = await db.query('SELECT * FROM financas.users')
    res.status(200).send(response.rows)
}

exports.newUser = async (req, res) => {
    const {
        name, email, senha
    } = req.body

    const hash = bcrypt.hashSync(senha, salt)

    const { rows } = await db.query(
        "INSERT INTO financas.users (name, email, senha) VALUES ($1, $2, $3)",
        [name, email, hash]
    )

    res.status(201).send({
        message: 'Usuário Cadastrado com sucesso',
        body: {
            dados: {
                name, email
            }
        }
    })
}

exports.updateUser = async(req, res) => {
    const userId = parseInt(req.params.id)
    const {
        name, email, senha
    } = req.body

    const hash = bcrypt.hashSync(senha, salt)

    const response = await db.query(
        "UPDATE financas.users SET name = $1, email = $2, senha = $3 WHERE id = $4",
        [name, email, hash, userId]
    )

    res.status(200).send({
        message: 'Usuário atualizado com sucesso',
        body: {
            dados: {
                name, email
            }
        }
    })
}

exports.deleteUser = async(req, res) => {
    const userId = parseInt(req.params.id)
    await db.query('DELETE FROM financas.users WHERE id = $1', [userId])
    res.status(200).send({
        message: 'Usuário excluido com sucesso',
        userId
    })
}