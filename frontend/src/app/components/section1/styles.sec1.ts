import { mediaWidthTransform } from '@/app/theme'
import styled from 'styled-components'

export const Section1ContainerSC = styled.section`
	display: grid;
	align-items: center;
	justify-items: center;
	height: 351px;
	width: 100%;
	background-color: var(--background-secondary);
	border-bottom: 1px solid var(--border-color-primary);
	@media (max-width: ${mediaWidthTransform}px) {
		height: max-content;
	}
`
export const DivSec1ContentColumnsSC = styled.div`
	display: grid;
	grid-template-columns: repeat(2, max-content);
	justify-content: space-between;
	align-items: center;
	height: max-content;
	width: 100%;
	padding: 0 20px 0 20px;
	max-width: var(--max-width-content);
	@media (max-width: ${mediaWidthTransform}px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, max-content);
		row-gap: 30px;
		justify-items: center;
		padding: 20px;
	}
`
export const DivSec1ContentRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(2, max-content);
	gap: 20px;
	align-items: center;
	height: max-content;
	width: 40vw;
	max-width: 400px;
	@media (max-width: ${mediaWidthTransform}px) {
		max-width: 500px;
		width: 70vw;
	}
`
export const H1Sec1TitleSC = styled.h1`
	font-size: clamp(
		var(--font-big-mobile),
		var(--font-big-tablet),
		var(--font-big-desktop)
	);
	font-weight: bold;
	letter-spacing: -0.02em;
	@media (max-width: ${mediaWidthTransform}px) {
		text-align: center;
	}
`
export const PSec1DescSC = styled.p`
	font-size: clamp(
		var(--font-small-mobile),
		var(--font-small-tablet),
		var(--font-small-desktop)
	);
	letter-spacing: 0em;
`
