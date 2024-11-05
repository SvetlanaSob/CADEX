import styled from 'styled-components'

export const HeaderContainerSC = styled.header`
	z-index: 100;
	display: grid;
	align-items: center;
	justify-items: center;
	height: 80px;
	width: 100%;
	background-color: var(--background-primary);
	position: fixed;
	top: 0;
	border-bottom: 1px solid var(--border-color-primary);
`
export const NavHeaderContentColumnsSC = styled.nav`
	display: grid;
	grid-template-columns: repeat(2, max-content);
	justify-content: space-between;
	align-items: center;
	height: max-content;
	width: 100%;
	padding: 0 20px 0 20px;
	max-width: var(--max-width-content);
`
export const SpanHeaderCompanyNameSC = styled.span`
	font-size: clamp(
		var(--font-mid-mobile),
		var(--font-mid-tablet),
		var(--font-mid-desktop)
	);
	font-weight: 600;
	letter-spacing: -0.02em;
`
