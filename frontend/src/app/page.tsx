'use client'
import React from 'react'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import { MainPageContainerSC } from './styles.page'

const MainPage = () => {
	return (
		<MainPageContainerSC>
			<Section1 />
			<Section2 />
			<Section3 />
		</MainPageContainerSC>
	)
}

export default MainPage
