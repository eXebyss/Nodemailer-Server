require('dotenv').config()

function emailToSender(name, email, message, dateString) {
	const emailOptionsToSender = {
		from: process.env.SENDGRID_MAIL,
		to: `${email}`,
		subject: 'Thank you for you message!',
		text: `Thank you for you message, ${name} (${email})! You have received this letter automatically because you sent your message via the contact form. I will try to answer you as soon as possible, if that is the purpose of the message. Thank you! Your message: "${message}" 	Date: ${dateString}`,
		html: `<div style="margin: 0 auto; width: auto; height: 100vh;">
                <h1 style="text-align: center;">
                    Thank you for you message, ${name}(${email})!
                </h1>
                <h2 style="font-weight: normal;">
                    You have received this letter automatically because your sent your
                    message via the contact form. I will try to answer you as soon as
                    possible, if that is the purpose of the message.
                </h2>
                <h2 style="font-weight: normal;">
                    Thank you!
                </h2>
                <p style="font-weight: normal;">
                    Your message: <span style="font-style: italic;">"${message}"</span>
                </p>
                <p style="font-weight: normal;">
                    Date: <span style="font-style: italic;">${dateString}</span>
                </p>
            </div>`,
	}

	return emailOptionsToSender
}

module.exports = emailToSender
