import React from 'react';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';

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
	${tw`py-small md:py-large`};
`;

type Props = {
	children?: React.ReactNode;
	style?: React.CSSProperties;
	headerSpace?: boolean;
};

export default ({ children, headerSpace, ...props }: Props) => {
	const [height, width] = useViewportSize();

	const isMobile = () => width < sizes().laptop;
	const getHeight = () => {
		// Don't set a height if it's a mobile phone
		// since we don't use a left menu on mobile.
		if (isMobile()) { return undefined; }
		// Reserve space for header on desktop
		if (headerSpace) { return height - 60; }
		return height;
	};

	return (
		<Section height={getHeight()} {...props}>
			{children}
		</Section>
	);
};
