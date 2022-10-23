require('dotenv').config()

function emailToReceiver(name, email, message, dateString) {
	const emailOptionsToReceiver = {
		from: process.env.SENDGRID_MAIL,
		to: process.env.SENDGRID_MAIL,
		subject: 'A New Message via PP Contact Form❗',
		text: `A New Message From ${email}! | Message: ${message} | Name: ${name} | Date: ${dateString}`,
		html: `<div style="margin: 0 auto; width: auto; height: 100vh;">
                <h1 style="text-align: center;">
                    A New Message From ${email}!
                </h1>
                <h2 style="font-weight: normal;"><span style="font-style: italic;">Message: </span>${message}</h2>
                <h2 style="font-weight: normal;"><span style="font-style: italic;">Name: </span>${name}</h2>
                <p style="font-weight: normal;">
                <span style="font-style: italic;">Date: </span>${dateString}
                </p>
            </div>`,
	}

	return emailOptionsToReceiver
}

module.exports = emailToReceiver
