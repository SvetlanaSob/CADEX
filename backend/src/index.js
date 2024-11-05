import express from 'express'
import cors from 'cors'
import { db, admin } from './firebase.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.post('/api/saveData', async (req, res) => {
	const { name, email, message } = req.body
	if (!name || !email || !message) {
		return res.status(400).send('Please fill in all inputs!')
	}
	try {
		const docData = await db.collection('users').add({
			name,
			email,
			message,
			createdAt: admin.firestore.FieldValue.serverTimestamp(),
		})

		return res
			.status(200)
			.send({ message: `Thank you for your interest, ${name}` })
	} catch (error) {
		return res.status(500).send('Error saving data to Firestore')
	}
})

app.get('/api/getData', async (req, res) => {
	try {
		const docData = await db.collection('users').orderBy('createdAt', 'desc').get()
		const data = []

		docData.forEach((doc) => {
			const { name, email, message} = doc.data()
			data.push({ id: doc.id, name, email, message })
		})

		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: 'Error getting data from Firestore' })
	}
})

app.listen(PORT, () => {
	console.log(`Server running ${PORT}`)
})
