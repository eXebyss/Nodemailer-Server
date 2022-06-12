import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import cors from 'cors'
import messageRouter from './routes/message.routes'
import skillRouter from './routes/skill.routes'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api/messages', messageRouter)
app.use('/api/skills', skillRouter)

const start = async () => {
	try {
		await mongoose.connect(process.env.DB_URL as string)

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
