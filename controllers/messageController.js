const nodemailer = require('nodemailer')
const Message = require('../models/Message')

require('dotenv').config()

const saveMessage = async ({ name, email, message, date }) => {
	try {
		const msg = new Message({ name, email, message, date })
		await msg.save()
		console.log('Message has been saved successfully!')
	} catch (err) {
		console.log(err)
	}
}

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD,
		clientId: process.env.OAUTH_CLIENTID,
		clientSecret: process.env.OAUTH_CLIENT_SECRET,
		refreshToken: process.env.OAUTH_REFRESH_TOKEN,
	},
})

class MessageController {
	sendMessage = (req, res) => {
		const name = req.body.name
		const email = req.body.email
		const message = req.body.message
		const date = req.body.date

		let mailOptionsToReceiver = {
			from: `${email}`,
			to: 'mf.mail.service@gmail.com',
			subject: 'A New Message via PP Contact Form',
			text: `A New Message From ${email}! | Message: ${message} | Name: ${name} | Date: ${date}`,
			html: `<div style="margin: 0; background: #1e1e2f; width: auto; height: 100vh;">
		<h1 style="color: rgb(254, 255, 225); text-align: center;">
			A New Message From ${email}!
		</h1>
		<h2 style="color: rgb(254, 255, 225); font-weight: normal;">Message: ${message}</h2>
		<h2 style="color: rgb(254, 255, 225); font-weight: normal;">Name: ${name}</h2>
		<p
			style="
				color: rgb(254, 255, 225);
				font-weight: normal;
				font-style: italic;
			"
		>
			Date: ${date}
		</p>
	</div>`,
		}

		let mailOptionsToSender = {
			from: `mf.mail.service@gmail.com`,
			to: `${email}`,
			subject: 'Thank you for you message!',
			text: `Thank you for you message, ${name}(${email})! You have received this letter automatically because you sent your message via the contact form. I will try to answer you as soon as possible, if that is the purpose of the message. Thank you! Your message: "${message}" 	Date: ${date}`,
			html: `<div style="margin: 0; background: #1e1e2f; width: auto; height: 100vh;">
		<h1 style="color: rgb(254, 255, 225); text-align: center;">
			Thank you for you message, ${name}(${email})!
		</h1>
		<h2 style="color: rgb(254, 255, 225); font-weight: normal;">
			You have received this letter automatically because your sent your message
			via the contact form. I will try to answer you as soon as possible, if
			that is the purpose of the message.
		</h2>
		<h2 style="color: rgb(254, 255, 225); font-weight: normal;">
			Thank you!
		</h2>
		<p
			style="
				color: rgb(254, 255, 225);
				font-weight: normal;			
			"
		>
			Your message: <span style="font-style: italic;">"${message}"</span>
		</p>
		<p
			style="
				color: rgb(254, 255, 225);
				font-weight: normal;
				font-style: italic;
			"
		>
			Date: ${date}
		</p>
	</div>`,
		}

		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		if (!email) {
			res.status(400).json({ message: `Email address is required!` })
		} else if (!re.test(String(email).toLowerCase())) {
			res
				.status(400)
				.json({ message: `Please provide a valid e-mail address!` })
		} else {
			transporter.sendMail(mailOptionsToReceiver, function (err, data) {
				if (err) {
					console.log('Error: ' + err)
					res.status(400).json({ message: `Email sending Error 1!` })
				} else {
					console.log('Email to receiver sent successfully!')

					transporter.sendMail(mailOptionsToSender, function (err, data) {
						if (err) {
							console.log('Error: ' + err)
							res.status(400).json({ message: `Email sending Error 2!` })
						} else {
							console.log('Email to sender sent successfully!')
							res
								.status(201)
								.json({
									message: `Email to receiver and sender sent successfully!`,
								})
						}
					})
					// res
					// 	.status(201)
					// 	.json({ message: `Email to receiver sent successfully!` })
				}
			})

			saveMessage({ name, email, message, date })
			// res.status(200).json({ message: `Message has been saved successfully!` })
		}
	}
}

module.exports = new MessageController()
