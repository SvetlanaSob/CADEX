'use client'
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { FormContainerSC } from './styles.form'
import './styles.form.css'
interface ChildComponentProps {
	onValueChange: (newValue: boolean) => void
}

const Form: React.FC<ChildComponentProps> = ({ onValueChange }) => {
	const [inputName, setInputName] = useState<string>('')
	const [inputEmail, setInputEmail] = useState<string>('')
	const [inputMessage, setInputMessage] = useState<string>('')

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/saveData`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: inputName,
					message: inputMessage,
					email: inputEmail,
				}),
			})
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			const data = await response.json()
			onValueChange(true)
			console.log(data)
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<FormContainerSC onSubmit={handleSubmit}>
			<TextField
				label='name'
				required
				value={inputName}
				onChange={(e) => setInputName(e.target.value)}
				fullWidth
				margin='normal'
				color='primary'
				className='customInput'
			/>
			<TextField
				label='email'
				value={inputEmail}
				onChange={(e) => setInputEmail(e.target.value)}
				fullWidth
				required
				color='primary'
				margin='normal'
				className='customInput'
			/>
			<TextField
				label='message'
				multiline
				rows={3}
				color='primary'
				value={inputMessage}
				onChange={(e) => setInputMessage(e.target.value)}
				fullWidth
				required
				margin='normal'
				className='customInput'
			/>
			<Button
				type='submit'
				variant='contained'
				color='secondary'
			>
				Отправить
			</Button>
		</FormContainerSC>
	)
}

export default Form
