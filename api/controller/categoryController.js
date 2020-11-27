const mysql = require('../database/mysqlConnector.js')

const getCategory = (request, response) => {
    const json = { nome : 'Macbook'}
    response.json(json)
}

const getCategoryById = (request, response) => {
    response.send('teste' + request.params.id)
}

const getCategoryByQuery = (request, response) => {
    response.json({
        nome : request.query.nome
    })
}

const postCategory = (request, response) => {
    response.json({status : 200})
}

module.exports = {getCategory, getCategoryById, getCategoryByQuery, postCategory}