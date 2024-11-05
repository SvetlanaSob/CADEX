import { mediaWidthTransform } from '@/app/theme'
import styled from 'styled-components'

export const Section2ContainerSC = styled.section`
	display: grid;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: var(--background-primary);
	border-top: 1px solid var(--border-color-primary);
	border-bottom: 1px solid var(--border-color-primary);
	padding: 60px 20px;
`
export const DivSec2ContentRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(3, max-content);
	row-gap: 40px;
	height: max-content;
	justify-items: center;
	width: 100%;
	max-width: var(--max-width-content);
`
export const DivSec2ListColumnsSC = styled.div`
	display: grid;
	grid-template-columns: repeat(3, max-content);
	gap: 60px;
	height: max-content;
	justify-content: center;
	width: 100%;
	@media (max-width: ${mediaWidthTransform}px) {
		grid-template-columns: repeat(2, max-content);
	}
`
export const H2Sec2TextSC = styled.h2`
	font-size: clamp(
		var(--font-big-mobile),
		var(--font-big-tablet),
		var(--font-big-desktop)
	);
	font-weight: bold;
	letter-spacing: -0.02em;
`
