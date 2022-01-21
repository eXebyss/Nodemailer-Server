const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const messageRouter = require('./routes/message.routes')

const app = express()

// app.use(cors({ origin: '*' }))
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})

app.use(express.json())

app.use('/api', messageRouter)

const start = async () => {
	try {
		await mongoose.connect(process.env.DB_URL)

		app.listen(process.env.PORT || 3000, () => {
			console.log(
				`Nodemailer is listening at http://localhost:${process.env.PORT}`
			)
		})
	} catch (err) {
		console.log(err)
	}
}

start()
