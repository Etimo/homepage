import styled, { ThemeProps, DefaultTheme } from 'styled-components';

export default styled.p<ThemeProps<DefaultTheme>>`
	font-family: ${({ theme }) => theme.typography.font};
`;
