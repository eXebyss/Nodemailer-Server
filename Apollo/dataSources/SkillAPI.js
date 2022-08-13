const { RESTDataSource } = require('apollo-datasource-rest')

class SkillAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = process.env.REST_URL
	}

	saveSkill(name, text, rate, date, dateUpdated) {
		return this.post(`skills/save-skill`, {
			name,
			text,
			rate,
			date,
			dateUpdated,
		})
	}

	getSkills() {
		return this.get('skills/get-skills')
	}

	getSkill(skillId) {
		return this.get(`skills/get-skills/${skillId}`)
	}

	updateSkill(skillId, name, text, rate, dateUpdated) {
		return this.put(`skills/update-skill/${skillId}`, {
			name,
			text,
			rate,
			dateUpdated,
		})
	}

	deleteSkill(skillId) {
		return this.delete(`skills/delete-skill/${skillId}`)
	}
}

module.exports = SkillAPI
