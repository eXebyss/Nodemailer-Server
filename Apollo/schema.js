const { gql } = require('apollo-server-express')

const typeDefs = gql`
	"Message send via contact form"
	type Message @cacheControl(maxAge: 60) {
		"Message id"
		_id: ID!
		"Name of the message author"
		name: String
		"Email of the message author"
		email: String
		"Message content"
		message: String
		"Date when the message was sent"
		date: String
		"DateString when the message was sent"
		dateString: String
	}

	"Skill object"
	type Skill @cacheControl(maxAge: 60) {
		"Skill id"
		_id: ID!
		"Skill name"
		name: String
		"Text or description of the skill"
		text: String
		"Rate of the skill"
		rate: Int
		"Date"
		date: String
		"Date when information was updated"
		dateUpdated: String
	}

	type Query @cacheControl(maxAge: 60) {
		"Query to get message array"
		messages: [Message!]!
		"Fetch specific message"
		message(id: ID!): Message!
		"Query to get skill array"
		skills: [Skill!]!
		"Fetch specific skill"
		skill(id: ID!): Skill!
	}

	type Mutation {
		"Save skill"
		saveSkill(
			name: String
			text: String
			rate: Int
			date: String
			dateUpdated: String
		): Skill!
		"Update skill"
		updateSkill(
			id: ID!
			name: String
			text: String
			rate: Int
			date: String
			dateUpdated: String
		): Skill!
		"Delete skill"
		deleteSkill(id: ID!): Skill!
	}

	enum CacheControlScope {
		PUBLIC
		PRIVATE
	}

	directive @cacheControl(
		maxAge: Int
		scope: CacheControlScope
		inheritMaxAge: Boolean
	) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`

module.exports = typeDefs
