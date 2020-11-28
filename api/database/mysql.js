const mysql = require('mysql')
const config = require('../config/read')

const connection = () =>{
    return mysql.createConnection(config.mysql)
}

module.exports = connection