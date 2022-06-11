import Router from 'express'
import messageController from '../controllers/messageController'

const router = Router()

router.post('/send-message', messageController.sendMessage)
router.get('/get-messages/', messageController.getMessages)
router.get('/get-messages/:id', messageController.getMessage)

export default router
