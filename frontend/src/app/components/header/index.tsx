'use client'
import React from 'react'
import {
	SpanHeaderCompanyNameSC,
	HeaderContainerSC,
	NavHeaderContentColumnsSC,
} from './styles.header'
import { Button } from '@mui/material'
import Link from 'next/link'

const Header = () => {
	return (
		<HeaderContainerSC>
			<NavHeaderContentColumnsSC>
				<Link href='/'>
					<SpanHeaderCompanyNameSC>
						Some Company
					</SpanHeaderCompanyNameSC>
				</Link>
				<Link href='/contact'>
					<Button variant='contained'>Contact us</Button>
				</Link>
			</NavHeaderContentColumnsSC>
		</HeaderContainerSC>
	)
}

export default Header
