import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';

type Props = {
	primary?: boolean;
	secondary?: boolean;
} & ThemeProps<DefaultTheme>;

export default styled.div<Props>`
	font-family: ${({ theme }) => theme.typography.caption.font};
	letter-spacing: ${({ theme }) => theme.typography.caption.spacing};
	font-size: ${({ theme }) => theme.typography.caption.size}px;
	line-height: 2;
	text-transform: uppercase;
	font-weight: 400;

	color: ${({ theme, primary, secondary }) => {
		if (primary) {
			return theme.primary;
		} else if (secondary) {
			return theme.secondary;
		}
	}};

	${tw`mb-1 md:mb-3 lg:mb-4 xl:mb-5 overflow-hidden`}
`;
