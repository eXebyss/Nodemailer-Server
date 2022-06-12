import { Request, Response } from 'express'
import Skill from '../models/Skill'

class SkillController {
	saveSkill = async (req: Request, res: Response) => {
		try {
			const { name, text, rate, date, dateUpdated } = req.body
			const skill = new Skill({ name, text, rate, date, dateUpdated })
			await skill.save()
			console.log('New skill has been saved successfully!', skill)
			res.status(201).json({
				message: `New skill has been saved successfully!`,
			})
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'Ooopps... Something went wrong... 1.1' })
		}
	}

	getSkills = async (req: Request, res: Response) => {
		try {
			const skills = await Skill.find()
			res.status(200).json(skills)
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'Ooopps... Something went wrong... 2.1' })
		}
	}

	getSkill = async (req: Request, res: Response) => {
		try {
			const id = req.params.id
			const skill = await Skill.findById({ _id: id })
			res.status(200).json(skill)
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'Ooopps... Something went wrong... 3.1' })
		}
	}

	updateSkill = async (req: Request, res: Response) => {
		try {
			const id = req.params.id
			const { name, text, rate, dateUpdated } = req.body
			const skill = await Skill.findByIdAndUpdate(
				{ _id: id },
				{ name, text, rate, dateUpdated },
				{ new: true }
			)
			res.status(200).json(skill)
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'Ooopps... Something went wrong... 4.1' })
		}
	}

	deleteSkill = async (req: Request, res: Response) => {
		try {
			const id = req.params.id
			const skill = await Skill.findByIdAndDelete({ _id: id })
			res.status(200).json(skill)
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'Ooopps... Something went wrong... 5.1' })
		}
	}
}

export default new SkillController()
