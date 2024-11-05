import styled, { css } from 'styled-components'

export const MainContactContainerSC = styled.main<{ $isSent: boolean }>`
	display: grid;
	align-items: center;
	padding-top: var(--header-height);
	padding-bottom: var(--footer-height);
	${({ $isSent }) =>
		$isSent &&
		css`
			padding: 30px;
		`}
	justify-items: center;
	text-align: center;
	height: 100vh;
	background-color: var(--background-secondary);
`
export const DivContactBoxSC = styled.div``
