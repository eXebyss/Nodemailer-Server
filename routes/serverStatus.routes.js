const Router = require('express')
const serverStatusController = require('../controllers/serverStatusController')

const router = new Router()

router.get('/check', serverStatusController.sendStatus)

module.exports = router
