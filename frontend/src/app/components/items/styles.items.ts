import { mediaWidthTransform } from '@/app/theme'
import styled from 'styled-components'

export const ArticleItemsContainerSC = styled.article`
	display: grid;
	grid-template-rows: repeat(2, max-content);
	text-align: left;
	gap: 10px;
	max-width: 300px;
	width: 20vw;
	transition: background-color 0.5s ease, transform 0.1s ease;
	padding: 5px;
	&&:hover {
		background-color: var(--background-secondary);
		transform: scale(1.05);
	}
	@media (max-width: ${mediaWidthTransform}px) {
		width: 35vw;
	}
`
export const H4ItemsTitleSC = styled.h4`
	font-size: clamp(
		var(--font-mid-mobile),
		var(--font-mid-tablet),
		var(--font-mid-desktop)
	);
	font-weight: 600;
	letter-spacing: -0.02em;
`
export const PItemsDescriptionSC = styled.p`
	font-size: clamp(
		var(--font-small-mobile),
		var(--font-small-tablet),
		var(--font-small-desktop)
	);
	letter-spacing: 0em;
`
