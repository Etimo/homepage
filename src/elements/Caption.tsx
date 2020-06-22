import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import tw from 'twin.macro';

type Props = {
	primary?: boolean;
	secondary?: boolean;
} & ThemeProps<DefaultTheme>;

export default styled.div<Props>`
	font-family: ${({ theme }) => theme.typography.font};
	letter-spacing: ${({ theme }) => theme.typography.caption.spacing};
	font-size: ${({ theme }) => theme.typography.caption.size}px;
	text-transform: uppercase;

	color: ${({ theme, primary, secondary }) => {
		if (primary) {
			return theme.primary;
		} else if (secondary) {
			return theme.secondary;
		}
	}};

	${tw`mb-2 md:mb-3 lg:mb-4 xl:mb-5`}
`;
