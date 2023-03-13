import React from 'react';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';

type StyleProps = {
	height?: number;
	width?: number;
} & ThemeProps<DefaultTheme>;

const VideoContainer = styled.section<StyleProps>`
	display: flex;
	justify-content: center;
	max-width: 800px;
`;

const VideoPlayer = styled.section<StyleProps>`
	margin: 5rem 1rem 1rem 1rem;
	width: ${(props) => props.width}px;
`;

type Props = {
	children?: React.ReactNode;
	style?: React.CSSProperties;
	headerSpace?: boolean;
};

export default ({ children, headerSpace, ...props }: Props) => {
	const [width] = useViewportSize();

	const isMobile = () => width < sizes().laptop;

	const getWidth = () => {
		if (isMobile()) {
			return width - 20;
		} else {
			return width - 200;
		}
	};

	return (
		<VideoContainer>
			<VideoPlayer width={getWidth()} {...props}>
				<iframe
					style={{ aspectRatio: '16/9', width: '100%' }}
					src="https://www.youtube-nocookie.com/embed/lvwHkwsdph4?cc_load_policy=1?modestbranding=1"
					title="Etimo"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
					allowFullScreen
				></iframe>
			</VideoPlayer>
		</VideoContainer>
	);
};
