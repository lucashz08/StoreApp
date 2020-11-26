const mysql = require('mysql')
const config = require('../config/readFile')

const connection = mysql.createConnection(config.mysql)

module.exports = connection.connect((err) => {
    if(err)
        console.log('MySQL OFF \n'+ err)
    else    
        console.log('MySQL ON : ' + connection.threadId)
})