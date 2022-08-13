const Router = require('express')
const skillController = require('../controllers/skillController')

const router = new Router()

router.post('/save-skill', skillController.saveSkill)
router.get('/get-skills', skillController.getSkills)
router.get('/get-skill/:id', skillController.getSkill)
router.put('/update-skill/:id', skillController.updateSkill)
router.delete('/delete-skill/:id', skillController.deleteSkill)

module.exports = router
