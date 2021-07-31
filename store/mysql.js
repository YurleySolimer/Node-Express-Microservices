const mysql = require('mysql')

const config = require('../config')

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection

function handleConnection () {
    connection = mysql.createConnection(dbconf)

    connection.connect((err) => {
        if(err) {
            console.error('[db err]', err)
            setTimeout(handleConnection, 2000)
        } else {
            console.log('DB Connected')
        }
        
    })

    connection.on('error', err => {
        console.error('[db err]', err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection()
        } else {
            throw err
        }
    })
}

handleConnection()

function list(table, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}' `, (err, data) => {
            if(err) return reject(err)
            resolve(data)
        })
    })
}

module.exports = {
    list
}