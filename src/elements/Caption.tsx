import styled, { ThemeProps, DefaultTheme } from 'styled-components';

type TextAlign = 'left' | 'right' | 'center';

type Props = {
	primary?: boolean;
	secondary?: boolean;
	textAlign?: TextAlign;
} & ThemeProps<DefaultTheme>;

export default styled.div<Props>`
	font-family: ${({ theme }) => theme.typography.font};
	letter-spacing: ${({ theme }) => theme.typography.caption.spacing};
	font-size: ${({ theme }) => theme.typography.caption.size}px;
	text-align: ${({ textAlign }) => textAlign && textAlign};
	text-transform: uppercase;

	color: ${({ theme, primary, secondary }) => {
		if (primary) {
			return theme.primary;
		} else if (secondary) {
			return theme.secondary;
		}
	}};
`;
