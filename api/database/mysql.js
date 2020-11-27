const mysql = require('mysql')
const config = require('../config/read')

const connection = mysql.createConnection(config.mysql)
const conn = connection.connect((err) => {
    if(err)
        console.log('MySQL OFF \n'+ err)
    else    
        console.log('MySQL ON : ' + connection.threadId)
});



module.exports = {conn , connection}