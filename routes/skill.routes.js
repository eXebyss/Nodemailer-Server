const Router = require('express')
const skillController = require('../controllers/skillController')

const router = new Router()

router.post('/save-skill', skillController.saveSkill)
router.get('/get-skills', skillController.getSkills)
router.get('/get-skill/:id', skillController.getSkill)

module.exports = router
