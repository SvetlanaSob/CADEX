import { mediaWidthTransform } from '@/app/theme'
import styled from 'styled-components'

export const DivYoutubeContainerSC = styled.div`
	display: grid;
	height: 270px;
	width: 480px;
	@media (max-width: 900px) {
		height: 190px;
		width: 350px;
	}
	@media (max-width: ${mediaWidthTransform}px) {
		height: 240px;
		width: 420px;
	}
	@media (max-width: 500px) {
		height: 170px;
		width: 310px;
	}
`
