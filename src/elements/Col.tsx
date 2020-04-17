import Box from './Box';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';

type Props = {
	sm?: boolean;
	md?: boolean;
	lg?: boolean;
	fullWidth?: boolean;
} & ThemeProps<DefaultTheme>;

export default styled(Box)<Props>`
	flex: 1;
	width: 100%;
	min-height: 1px;
	padding: 0 15px;

	max-width: ${({ fullWidth }) => fullWidth && `100% !important`};

	max-width: ${(props) => {
		if (props.sm) {
			return '100%';
		} else if (props.md) {
			return '80%';
		} else {
			return '60%';
		}
	}};
`;
