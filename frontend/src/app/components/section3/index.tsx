'use client'
import React from 'react'
import {
	Section3ContainerSC,
	DivSec3ContentRowsSC,
	H3Sec3TextSC,
} from './styles.sec3'
import { Button } from '@mui/material'
import Link from 'next/link'

const Section3 = () => {
	return (
		<Section3ContainerSC>
			<DivSec3ContentRowsSC>
				<H3Sec3TextSC>Less important title</H3Sec3TextSC>
				<Link href='/contact'>
					<Button
						type='submit'
						variant='contained'
						color='primary'
					>
						Contact us
					</Button>
				</Link>
			</DivSec3ContentRowsSC>
		</Section3ContainerSC>
	)
}

export default Section3
