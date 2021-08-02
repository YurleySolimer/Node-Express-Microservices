const express = require('express')

const config = require('../config')
const router = require('./network')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/', router)

app.listen(config.mysqlService.port), () => {
    console.log('Servicio de MYSQL escuchando en el puesto', config.mysqlService.port)
}