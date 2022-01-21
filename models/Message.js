const { Schema, model } = require('mongoose')

const Message = new Schema({
	name: { type: String},
	email: { type: String, required: true },
	message: { type: String},
	date: { type: Date, default: Date.now() },
})

module.exports = model('Message', Message)
