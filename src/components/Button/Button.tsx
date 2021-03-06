import styled, { DefaultTheme, ThemeProps } from 'styled-components';

export default styled.button<ThemeProps<DefaultTheme>>`
	font-family: ${({ theme }) => theme.typography.paragraph.font};
	font-size: 14px;
	padding: 0;
	border: none;
	text-align: center;
	text-decoration: none;
	background-color: transparent;
`;
