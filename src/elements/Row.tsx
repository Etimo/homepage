import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import Box from './Box';

type FlexDirection = 'row' | 'column';

type Props = {
	direction?: FlexDirection;
} & ThemeProps<DefaultTheme>;

export default styled(Box)<Props>`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -15px;

	flex-direction: ${({ direction }) => direction && direction};

	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;
