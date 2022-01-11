import styled from 'styled-components'

const H1 = styled.h1`
	font-size: ${props => props.fontSize};
	font-family: ${props => props.fontFamily};
	font-weight: ${props => props.fontWeight};
	line-height: ${props => props.lineHeight};
	text-align: ${props => props.textAlign};
	color: ${props => props.theme.text};
	margin: ${props => props.margin};
	padding: ${props => props.padding};
	width: ${props => props.width};
`

const H2 = styled.h2`
	font-size: ${props => props.fontSize};
	font-family: ${props => props.fontFamily};
	font-weight: ${props => props.fontWeight};
	line-height: ${props => props.lineHeight};
	text-align: ${props => props.textAlign};
	color: ${props => props.theme.text};
	margin: ${props => props.margin};
	padding: ${props => props.padding};
	width: ${props => props.width};
`
const H3 = styled.h3`
	font-size: ${props => props.fontSize};
	font-family: ${props => props.fontFamily};
	font-weight: ${props => props.fontWeight};
	line-height: ${props => props.lineHeight};
	text-align: ${props => props.textAlign};
	color: ${props => props.theme.text};
	margin: ${props => props.margin};
	padding: ${props => props.padding};
	width: ${props => props.width};
`
const H4 = styled.h4`
	font-size: ${props => props.fontSize};
	font-family: ${props => props.fontFamily};
	font-weight: ${props => props.fontWeight};
	line-height: ${props => props.lineHeight};
	text-align: ${props => props.textAlign};
	color: ${props => props.theme.text};
	margin: ${props => props.margin};
	padding: ${props => props.padding};
	width: ${props => props.width};
`

export { H1, H2, H3, H4 }
