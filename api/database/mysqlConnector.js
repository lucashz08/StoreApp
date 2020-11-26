const mysql = require('mysql')
const config = require('../config/readFile')

const connection = mysql.createConnection(config.mysql)

module.exports = connection.connect((err) => {
    if(err)
        console.log('Error to connect '+ err)
        
    console.log('MySQL ON : ' + connection.threadId)
})