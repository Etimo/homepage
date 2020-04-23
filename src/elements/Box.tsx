import styled, { ThemeProps, DefaultTheme } from 'styled-components';

type JustifyContent =
	| 'start'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';

type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

type FlexDirection = 'row' | 'column';

export type BoxProps = {
	flex?: boolean;
	flexDirection?: FlexDirection;
	justifyContent?: JustifyContent;
	alignItems?: AlignItems;

	ma?: string;
	mb?: number;
	mt?: number;
	mr?: number;
	ml?: number;
} & ThemeProps<DefaultTheme>;

export default styled.div<BoxProps>`
	display: ${({ flex }) => flex && 'flex'};
	flex-direction: ${({ flexDirection }) => flexDirection};
	justify-content: ${({ justifyContent }) => justifyContent};
	align-items: ${({ alignItems }) => alignItems};

	margin: ${({ ma }) => ma && `${ma}`};
	margin-bottom: ${({ mb }) => mb && `${mb}px`};
	margin-top: ${({ mt }) => mt && `${mt}px`};
	margin-right: ${({ ml }) => ml && `${ml}px`};
	margin-left: ${({ mr }) => mr && `${mr}px`};
`;
