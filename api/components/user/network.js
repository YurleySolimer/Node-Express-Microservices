const { Router } = require('express')

const secure = require('./secure')
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

router.post('/follow/:id', function (req, res, next) {
    Controller.follow(req.user.id, req.params.id)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(next)
})

router.post('/', secure('follow'), function (req, res) {
    Controller.upsert(req.body)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch((err) => {
            response.error(req, res, err.message, 500)
        })
})

router.get('/:id/following', function (req, res) {
    return Controller.following(req.params.id)
        then((data) => {
            return response.success(req, res, data, 200)
        })
        .catch(next)
})

router.put('/', secure('update'), function (req, res) {
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