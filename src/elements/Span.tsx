import styled, { DefaultTheme, ThemeProps } from 'styled-components';

type Props = {
	primary?: boolean;
	secondary?: boolean;
} & ThemeProps<DefaultTheme>;

export default styled.span<Props>`
	color: ${({ theme, primary, secondary }) => {
		if (primary) {
			return theme.primary;
		} else if (secondary) {
			return theme.secondary;
		}
	}};
`;
