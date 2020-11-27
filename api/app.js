const app = require('express')()
const bodyParser = require('body-parser')
const config = require('./config/readFile')
const categoryController = require('./controller/category')

const port = parseInt(process.argv[2]) ||
             parseInt(config.server.port) || 3000

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

// Categorias
// GET
app.get('/category', categoryController.get)
app.get('/category/query', categoryController.getByQuery)
app.get('/category/:id', categoryController.getById)

// POST
app.post('/category', categoryController.post)


app.listen(port, () => {
    console.log('Api foi executada na porta : ' + port)
})

