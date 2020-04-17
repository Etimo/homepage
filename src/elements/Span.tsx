import styled, { ThemeProps, DefaultTheme } from 'styled-components';

type Props = {
	primary?: boolean;
	secondary?: boolean;
} & ThemeProps<DefaultTheme>;

export default styled.span<Props>`
	font-family: ${({ theme }) => theme.typography.font};

	color: ${({ theme, primary, secondary }) => {
		if (primary) {
			return theme.primary;
		} else if (secondary) {
			return theme.secondary;
		}
	}};
`;
