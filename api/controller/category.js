const mysql = require('../database/category')

const get = async (request, response) => {

    mysql.getCategory( result => response.json(result) )

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