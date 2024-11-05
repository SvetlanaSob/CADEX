import styled from 'styled-components'

export const FooterContainerSC = styled.footer`
	position: fixed;
	bottom: 0;
	display: grid;
	justify-content: center;
	align-items: center;
	height: max-content;
	padding: 30px;
	background-color: var(--background-primary);
	width: 100%;
	border-top: 1px solid var(--border-color-primary);
`
export const SpanFooterTextSC = styled.span`
	font-size: clamp(
		var(--font-mid-mobile),
		var(--font-mid-tablet),
		var(--font-mid-desktop)
	);
	font-weight: 600;
	letter-spacing: -0.02em;
`
