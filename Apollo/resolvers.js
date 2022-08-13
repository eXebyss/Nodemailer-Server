const resolvers = {
	Query: {
		messages: (_, __, { dataSources }) => {
			return dataSources.messageAPI.getMessages()
		},
		message: (_, { id }, { dataSources }) => {
			return dataSources.messageAPI.getMessage(id)
		},
		skills: (_, __, { dataSources }) => {
			return dataSources.skillAPI.getSkills()
		},
		skill: (_, { id }, { dataSources }) => {
			return dataSources.skillAPI.getSkill(id)
		},
	},
	Mutation: {
		saveSkill: (
			_,
			{ name, text, rate, date, dateUpdated },
			{ dataSources }
		) => {
			return dataSources.skillAPI.saveSkill(name, text, rate, date, dateUpdated)
		},
		updateSkill: (
			_,
			{ id, name, text, rate, dateUpdated },
			{ dataSources }
		) => {
			return dataSources.skillAPI.updateSkill(id, name, text, rate, dateUpdated)
		},
		deleteSkill: (_, { id }, { dataSources }) => {
			return dataSources.skillAPI.deleteSkill(id)
		},
	},
}

module.exports = resolvers
