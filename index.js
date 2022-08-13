const { ApolloServer } = require('apollo-server-express')

const express = require('express')

const helmet = require('helmet')
const mongoose = require('mongoose')
const cors = require('cors')
const messageRouter = require('./routes/message.routes')
const skillRouter = require('./routes/skill.routes')
const typeDefs = require('./Apollo/schema')
const resolvers = require('./Apollo/resolvers')
const MessageAPI = require('./Apollo/dataSources/MessageAPI')
const SkillAPI = require('./Apollo/dataSources/SkillAPI')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api/messages', messageRouter)
app.use('/api/skills', skillRouter)

async function startApolloServer(typeDefs, resolvers) {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				messageAPI: new MessageAPI(),
				skillAPI: new SkillAPI(),
			}
		},
		csrfPrevention: true,
		cache: 'bounded',
	})

	await server.start()

	server.applyMiddleware({
		app,
	})
}

const start = async () => {
	try {
		mongoose.connect(process.env.DB_URL)

		app.listen(process.env.PORT || 4040, () => {
			console.log(`
				🚀  Server is running
				🔉  Listening on port http://localhost:${process.env.PORT}
				📭  Query at http://localhost:${process.env.PORT}/graphql
			  `)
		})
	} catch (err) {
		console.log(err)
	}
}

startApolloServer(typeDefs, resolvers)

start()
