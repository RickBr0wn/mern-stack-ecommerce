import { css } from 'styled-components'

export const mediaQuery = props => css`
	@media only screen and (max-width: 380px) {
		${props}
	}
`
// TODO: During design utilise these media query functions

// export const desktop = props => css`
// 	@media screen and (min-width: 1024px) {
// 		${props}
// 	}
// `

// export const tablet = props => css`
// 	@media screen and (min-width: 768px) and (max-width: 1023px) {
// 		${props}
// 	}
// `

// export const mobile = props => css`
// 	@media screen and (max-width: 767px) {
// 		${props}
// 	}
// `
