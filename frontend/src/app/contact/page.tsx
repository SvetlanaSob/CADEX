'use client'
import { Typography } from '@mui/material'
import { DivContactBoxSC, MainContactContainerSC } from './styles.contact'
import Form from '../components/form'
import { useState } from 'react'

const ContactPage = () => {
	const [isSent, setIsSent] = useState<boolean>(false)

	const handleValueChange = (newValue: boolean) => {
		setIsSent(newValue)
	}

	return (
		<MainContactContainerSC $isSent={isSent}>
			{isSent ? (
				<Typography variant='h2'>
					Message generated on the server
				</Typography>
			) : (
				<DivContactBoxSC>
					<Typography variant='h2'>Fill in!</Typography>
					<Form onValueChange={handleValueChange} />
				</DivContactBoxSC>
			)}
		</MainContactContainerSC>
	)
}

export default ContactPage
