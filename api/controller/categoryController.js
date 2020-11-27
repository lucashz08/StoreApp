const getCategory = (request, response) => {
    const json = { nome : 'Macbook'}
    response.json(json)
}

const getCategoryById = (request, response) => {
    response.send('teste' + request.params.id)
}

module.exports = {getCategory, getCategoryById}