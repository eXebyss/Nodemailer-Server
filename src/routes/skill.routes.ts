import Router from 'express'
import skillController from '../controllers/skillController'

const router = Router()

router.post('/save-skill', skillController.saveSkill)
router.get('/get-skills', skillController.getSkills)
router.get('/get-skill/:id', skillController.getSkill)
router.put('/update-skill/:id', skillController.updateSkill)
router.delete('/delete-skill/:id', skillController.deleteSkill)

export default router
