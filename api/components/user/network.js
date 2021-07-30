const { Router } = require('express')
const response = require('../../../network/response')
const Controller = require('./index')
const router = Router()

router.get('/', function (req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        })
})

router.get('/:id', function (req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        })
})

router.post('/', function (req, res) {
    Controller.upsert(req.body)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        })
})

router.put('/', function (req, res) {
    Controller.upsert(req.body)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        })
})

router.delete('/:id', async function (req, res) {
    const userDeleted = await Controller.delete(req.params.id)
    if(userDeleted) response.success(req, res, data, 201)
    response.error(req, res, err.message, 500)

        
})


module.exports = router;