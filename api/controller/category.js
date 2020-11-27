const mysql = require('../database/mysql.js')

const get = (request, response) => {
    const json = { nome : 'Macbook'}
    response.json(json)
}

const getById = (request, response) => {
    response.send('teste' + request.params.id)
}

const getByQuery = (request, response) => {
    response.json({
        nome : request.query.nome
    })
}

const post = (request, response) => {
    response.json(request.body)
}

module.exports = {get, getById, getByQuery, post}