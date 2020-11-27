const ini = require('ini')
const fileSystem = require('fs')

module.exports = ini.parse(fileSystem.readFileSync('./config/config.ini', 'utf-8'))