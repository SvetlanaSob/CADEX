'use client'
import React from 'react'
import {
	Section1ContainerSC,
	DivSec1ContentColumnsSC,
	DivSec1ContentRowsSC,
	H1Sec1TitleSC,
	PSec1DescSC,
} from './styles.sec1'
import ResponsiveYoutubeEmbed from '../YouTube'

const Section1 = () => {
	return (
		<Section1ContainerSC>
			<DivSec1ContentColumnsSC>
				<DivSec1ContentRowsSC>
					<H1Sec1TitleSC>
						Most important title on the page
					</H1Sec1TitleSC>
					<PSec1DescSC>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aliquam mattis, leo et condimentum ultricies, sem urna
						convallis metus, vel suscipit nibh lacus tincidunt ante
					</PSec1DescSC>
				</DivSec1ContentRowsSC>
				<ResponsiveYoutubeEmbed />
			</DivSec1ContentColumnsSC>
		</Section1ContainerSC>
	)
}

export default Section1
