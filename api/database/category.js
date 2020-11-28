const connection = require('../database/mysql')

const getCategory = (callback) => {

    const conn = connection()

    const query = conn.query('SELECT * FROM category', (error, result) => {
        if(error) throw error
        callback(result)
        conn.destroy()
    })

    console.log(query.sql)
}

module.exports = {getCategory}