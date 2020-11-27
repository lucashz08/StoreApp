const app = require('express')()
const config = require('./config/readFile')
const { getCategory, getCategoryById, getCategoryByQuery, postCategory } = require('./controller/categoryController')

const port = parseInt(process.argv[2]) ||
             parseInt(config.server.port) || 3000

// Categorias
// GET
app.get('/category', getCategory)
app.get('/category/query', getCategoryByQuery)
app.get('/category/:id', getCategoryById)

// POST
app.post('/category', postCategory)


app.listen(port, () => {
    console.log('Api foi executada na porta : ' + port)
})

