import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'
import { DivYoutubeContainerSC } from './styles.youtube'

const ResponsiveYoutubeEmbed = () => {
	return (
		<DivYoutubeContainerSC>
			<ResponsiveEmbed
				src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=liRsZjVQfI0DUBYJ'
				ratio='16:9'
			/>
		</DivYoutubeContainerSC>
	)
}

export default ResponsiveYoutubeEmbed
