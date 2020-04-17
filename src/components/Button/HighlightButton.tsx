import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import Button from './Button';

export default styled(Button)<ThemeProps<DefaultTheme>>`
	letter-spacing: 0.075em;
	padding: 6px 0px;
	border-bottom: 1px solid #151515;
	font-weight: 300;

	background-size: 100% 200%;
	background-image: ${(props) =>
		'linear-gradient(to bottom, transparent 50%, ' +
		props.theme.secondary +
		' 50%)'};

	transition: all 0.25s ease;

	&:hover {
		background-position: 0 100%;
		border: 1px transparent;
	}
`;
