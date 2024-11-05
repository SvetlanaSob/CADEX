'use client'
import React, { useState } from 'react'
import {
	Section2ContainerSC,
	DivSec2ContentRowsSC,
	H2Sec2TextSC,
} from './styles.sec2'
import Link from 'next/link'
import { Button } from '@mui/material'
import Items from '../items'

const Section2 = () => {
	return (
		<Section2ContainerSC>
			<DivSec2ContentRowsSC>
				<H2Sec2TextSC>Also very important title</H2Sec2TextSC>
				<Items />
				<Link href='/contact'>
					<Button
						type='submit'
						variant='contained'
						color='primary'
					>
						Contact us
					</Button>
				</Link>
			</DivSec2ContentRowsSC>
		</Section2ContainerSC>
	)
}

export default Section2
