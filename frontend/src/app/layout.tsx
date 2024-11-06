'use client'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import theme from './theme'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8'></meta>
				<meta
					property='og:title'
					content='Cadex Test'
				></meta>
				<meta
					property='og:type'
					content='website'
				></meta>
				<meta
					property='og:url'
					content='https://cadex-peach.vercel.app/'
				></meta>
				<meta
					property='og:description'
					content='Test project for CADEX'
				></meta>
				<meta
					property='og:image'
					content='https://fost.ws/soft/wp-content/uploads/2023/03/cad-exchanger-3-17-0-build-16601-crack-2023_6414a3a5bc95d.jpeg'
				></meta>
				<title>Cadex Test</title>
				<meta
					name='description'
					content='Test project for CADEX'
				></meta>
			</head>
			<body>
				{isLoading ? (
					<div className='LoadingContainer'>
						<HashLoader color='#3700ff' />
					</div>
				) : (
					<ThemeProvider theme={theme}>
						<SCThemeProvider theme={theme}>
							<CssBaseline />
							<Header />
							{children}
							<Footer />
						</SCThemeProvider>
					</ThemeProvider>
				)}
			</body>
		</html>
	)
}
