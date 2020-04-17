import styled, { ThemeProps, DefaultTheme } from 'styled-components';

type JustifyContent =
	| 'start'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';

type FlexDirection = 'row' | 'column';

export type BoxProps = {
	flex?: boolean;
	flexDirection?: FlexDirection;
	justifyContent?: JustifyContent;

	ma?: number;
	mb?: number;
	mt?: number;
	mr?: number;
	ml?: number;
} & ThemeProps<DefaultTheme>;

export default styled.div<BoxProps>`
	display: ${({ flex }) => flex && 'flex'};
	flex-direction: ${({ flexDirection }) => flexDirection};
	justify-content: ${({ justifyContent }) => justifyContent};

	margin: ${({ ma }) => ma && `${ma}px`};
	margin-bottom: ${({ mb }) => mb && `${mb}px`};
	margin-top: ${({ mt }) => mt && `${mt}px`};
	margin-right: ${({ ml }) => ml && `${ml}px`};
	margin-left: ${({ mr }) => mr && `${mr}px`};
`;
