import React from 'react';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import { FloatUp } from '../animations';
import { AnimatedH2, Caption, Span } from '../elements';
import Section from './Section';

type StyleProps = {
	width?: number;
} & ThemeProps<DefaultTheme>;

const VideoContainer = styled.section<StyleProps>`
	display: flex;
	justify-content: center;
	max-width: 800px;
`;

const VideoPlayer = styled.section<StyleProps>`
	margin: 5rem 1rem 1rem;
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

	return (
		<Section style={{ backgroundColor: '#FFFFFF' }}>
			<div className="flex flex-col mb-8 lg:h-95 lg:max-h-95 lg:justify-center lg:items-center">
				<FloatUp>
					<Caption className="text-center">Kollegorna</Caption>
				</FloatUp>
				<div className="flex flex-row justify-center">
					<AnimatedH2 direction="left">Vi är</AnimatedH2>
					<AnimatedH2 direction="right">
						<Span>&nbsp;Etimo</Span>
					</AnimatedH2>
				</div>
				<VideoContainer>
					<VideoPlayer width={isMobile() ? width - 20 : width - 200} {...props}>
						<iframe
							style={{ aspectRatio: '16/9', width: '100%' }}
							src="https://www.youtube-nocookie.com/embed/XvhnFCddD4g?si=FyT1c_QT_1_SeMhG?cc_load_policy=1?modestbranding=1"
							title="Etimo"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
							allowFullScreen
						></iframe>
					</VideoPlayer>
				</VideoContainer>
			</div>
		</Section>
	);
};
