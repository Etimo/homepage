import styled, { ThemeProps, DefaultTheme } from 'styled-components';

export default styled.p<ThemeProps<DefaultTheme>>`
	font-family: ${({ theme }) => theme.typography.paragraph.font};
	font-size: 14px;
	line-height: 2.3;
	font-weight: 100;
	letter-spacing: 0.05em;
`;
