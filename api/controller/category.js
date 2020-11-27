const {conn, connection} = require('../database/mysql')

const get = async (request, response) => {
   const json = []

   const query = connection.query("SELECT * FROM category", (error, result) => {
        if(error) throw error
            json.push(...JSON.parse(JSON.stringify(result)))
            console.log(json)
            response.send(json)
    })

    console.log('query gerada foi ' + query.sql)
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