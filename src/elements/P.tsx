import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';

export default styled.p<ThemeProps<DefaultTheme>>`
	font-family: ${({ theme }) => theme.typography.paragraph.font};
	letter-spacing: 0.05em;
	${tw`text-blackGray leading-small lg:leading-large text-small md:text-sm`};
`;
/* font-size 13 to md, then 14 */
/* line-height: 1.7 lg:2.15 */
