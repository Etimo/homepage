import React from 'react';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';
import { useViewportSize } from '../hooks';
import { sizes } from '../helpers';

type StyleProps = {
	height?: number;
} & ThemeProps<DefaultTheme>;

/* Padding is 40px on mobile */
const Section = styled.section<StyleProps>`
	display: flex;
	height: ${(props) => (props.height ? props.height + 'px' : 'inherit')};
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 50px 0;
	overflow: hidden;
	${tw`py-small md:py-large`};
`;

type Props = {
	children?: React.ReactNode;
	style?: React.CSSProperties;
	sectionHeight: number;
};

export default ({ children, sectionHeight, ...props }: Props) => {
	const [height, width] = useViewportSize();
	const isMobile = () => width < sizes().laptop;
	return (
		<Section height={isMobile() ? undefined : sectionHeight} {...props}>
			{children}
		</Section>
	);
};
