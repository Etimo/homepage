import React from 'react';
import styled, { useTheme, ThemeProps, DefaultTheme } from 'styled-components';

type StyleProps = {
	height?: number;
} & ThemeProps<DefaultTheme>;

const Section = styled.section<StyleProps>`
	display: flex;
	height: ${(props) => (props.height ? props.height + 'px' : 'inherit')};
	justify-content: center;
	max-width: ${(props) => props.theme.sizes.large};
	margin: 0 auto;
`;

type Props = {
	children: React.ReactNode;
	style?: React.CSSProperties;
};

export default ({ children, ...props }: Props) => {
	const height = useTheme().section.height;

	return (
		<Section height={height} {...props}>
			{children}
		</Section>
	);
};
