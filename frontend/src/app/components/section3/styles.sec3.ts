import styled from 'styled-components'

export const Section3ContainerSC = styled.section`
	display: grid;
	justify-content: center;
	align-items: center;
	height: max-content;
	width: 100%;
	padding: 50px 0;
	background-color: var(--background-secondary);
	border-top: 1px solid var(--border-color-primary);
	border-bottom: 1px solid var(--border-color-primary);
`
export const DivSec3ContentRowsSC = styled.div`
	display: grid;
	grid-template-rows: repeat(2, max-content);
	row-gap: 20px;
	height: max-content;
	justify-items: center;
	width: 100%;
	padding: 0 20px 0 20px;
	max-width: var(--max-width-content);
`
export const H3Sec3TextSC = styled.h3`
	font-size: clamp(
		var(--font-big-mobile),
		var(--font-big-tablet),
		var(--font-big-desktop)
	);
	font-weight: bold;
	letter-spacing: -0.02em;
`
