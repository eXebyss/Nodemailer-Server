const Router = require('express')
const messageController = require('../controllers/messageController')

const router = new Router()

router.post('/send-message', messageController.sendMessage)
router.get('/get-messages/', messageController.getMessages)
router.get('/get-messages/:id', messageController.getMessage)

module.exports = router
