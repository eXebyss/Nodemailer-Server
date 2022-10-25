const nodemailer = require('nodemailer')

const emailTransporter = nodemailer.createTransport({
	service: 'SendGrid',
	auth: {
		user: process.env.SENDGRID_USERNAME,
		pass: process.env.SENDGRID_API_KEY,
	},
})

module.exports = emailTransporter
