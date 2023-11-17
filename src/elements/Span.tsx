import styled, { DefaultTheme, ThemeProps } from 'styled-components';

export default styled.span<ThemeProps<DefaultTheme>>`
	color: ${(props) => props.theme.primary};
`;
