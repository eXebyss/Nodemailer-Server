import { Schema, model } from 'mongoose'

const Message = new Schema({
	name: { type: String },
	email: { type: String, required: true },
	message: { type: String },
	date: { type: Date, default: Date.now() },
	dateString: { type: String },
})

export default model('Message', Message)
