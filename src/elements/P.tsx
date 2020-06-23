import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';

export default styled.p<ThemeProps<DefaultTheme>>`
	font-family: ${({ theme }) => theme.typography.paragraph.font};
	font-size: 14px;
	line-height: 2.3;
	letter-spacing: 0.05em;
	${tw`text-blackGray`};
`;
