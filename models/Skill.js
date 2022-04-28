const { Schema, model } = require('mongoose')

const Skill = new Schema({
	name: { type: String },
	text: { type: String },
	date: { type: Date, default: Date.now() },
})

module.exports = model('Skill', Skill)
