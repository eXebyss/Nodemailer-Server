class ServerStatusController {
	sendStatus = async (req, res) => {
		try {
			const messages = 'Server status: Online.'
			res.status(200).json(messages)
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'Server is not responding.' })
		}
	}
}

module.exports = new ServerStatusController()
