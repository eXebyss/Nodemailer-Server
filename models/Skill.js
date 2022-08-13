const { Schema, model } = require('mongoose')

const Skill = new Schema({
	name: { type: String },
	text: { type: String },
	rate: { type: Number, default: 0, min: 0, max: 5 },
	date: { type: Date, default: Date.now() },
	dateUpdated: { type: Date, default: Date.now() },
})

module.exports = model('Skill', Skill)
