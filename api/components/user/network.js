const { Router } = require('express')
const response = require('../../../network/response')
const router = Router()

router.get('/', function (req, res) {
    response.success(req, res, 'Work', 200)
})

module.exports = router;