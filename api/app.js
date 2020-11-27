const app = require('express')()
const config = require('./config/readFile')
const { getCategory, getCategoryById } = require('./controller/categoryController')

const port = parseInt(process.argv[2]) ||
             parseInt(config.server.port) || 3000


app.get('/opa', getCategory)
app.get('/opa/:id', getCategoryById)

app.listen(port, () => {
    console.log('Api foi executada na porta : ' + port)
})

