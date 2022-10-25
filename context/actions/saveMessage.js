const Message = require('../../models/Message')

const saveMessage = async ({ name, email, message, date, dateString }) => {
	try {
		const msg = new Message({ name, email, message, date, dateString })
		await msg.save()
		console.log('Message has been saved successfully!')
	} catch (err) {
		console.log(err)
	}
}

module.exports = saveMessage
