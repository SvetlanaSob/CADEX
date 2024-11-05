'use client'
import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import theme from './theme'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<ThemeProvider theme={theme}>
					<SCThemeProvider theme={theme}>
						<CssBaseline />
						<div className='mainContent'>
							<Header />
							{children}
							<Footer />
						</div>
					</SCThemeProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
