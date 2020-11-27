const fileIni = require('ini')
const fs = require('fs')

const readIniFile = () => {
    const ARQUIVO_PATH = './config/config.ini'
    return fileIni.parse(fs.readFileSync(ARQUIVO_PATH, 'utf-8'))
}

module.exports = readIniFile()