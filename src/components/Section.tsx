import React from 'react';
import styled, { useTheme, ThemeProps, DefaultTheme } from 'styled-components';

type StyleProps = {
	height?: number;
} & ThemeProps<DefaultTheme>;

const Section = styled.section<StyleProps>`
	display: flex;
	height: ${(props) => (props.height ? props.height + 'px' : 'inherit')};
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 150px 0;
`;

type Props = {
	children?: React.ReactNode;
	style?: React.CSSProperties;
	headerSpace?: boolean;
};

export default ({ children, headerSpace, ...props }: Props) => {
	const height = useTheme().section.height;

	const finalHeight = headerSpace ? height - 60 : height;

	return (
		<Section height={finalHeight} {...props}>
			{children}
		</Section>
	);
};
