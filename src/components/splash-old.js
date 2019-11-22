import React from 'react';
import styled from 'styled-components';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import posed from 'react-pose';
import SplitText from 'react-pose-text';
import { useViewportHeight } from '../hooks';
import BouncingAnimation from '../animations/Bouncing';
import FadeInAnimation from '../animations/FadeIn';

const SizedContainer = styled.div`
  width: 100%;
  height: ${props =>
		props.height > props.minHeight ? props.height : props.minHeight}px;
  /* background-color: ${props => props.theme.secondary}; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 1em;
`;

const SlideLeft = posed.h1({
	hidden: {
		x: '30%'
	},
	visible: {
		x: '0%',
		transition: {
			duration: 1000
		}
	}
});

const TitleWrapper = styled.div`
	width: 100%;
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column;
`;

const ScrollDownContainer = styled.div`
	margin-bottom: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ScrollDownText = styled.span`
	padding-bottom: 0.5rem;
	font-family: 'Quicksand';
	color: ${props => props.theme.main};
`;

const StyledIcon = styled(FontAwesomeIcon)`
	color: ${props => props.theme.secondary};
`;

const EtimoTitle = styled(SlideLeft)`
	color: ${props => props.theme.main};
	font-family: 'Quicksand';
	font-weight: normal;
	font-size: 6em;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const HorizontalLine = styled.hr`
	border: 1px solid ${props => props.theme.secondary};
	border-radius: 1px;
	width: 275px;
	margin: 0 auto;
`;

export default () => {
	const height = useViewportHeight();
	const finalHeight = height - 60; // Header is 60px

	const charPoses = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			delay: ({ charIndex }) => charIndex * 200
		}
	};

	return (
		<SizedContainer height={finalHeight} minHeight={400}>
			<TitleWrapper>
				<EtimoTitle initialPose="hidden" pose="visible">
					<SplitText charPoses={charPoses}>Etimo</SplitText>
					<FadeInAnimation delay={1000}>
						<HorizontalLine />
					</FadeInAnimation>
				</EtimoTitle>
			</TitleWrapper>
			<FadeInAnimation delay={1500}>
				<ScrollDownContainer>
					<ScrollDownText>Scroll Down</ScrollDownText>
					<BouncingAnimation>
						<StyledIcon icon={faArrowDown} />
					</BouncingAnimation>
				</ScrollDownContainer>
			</FadeInAnimation>
		</SizedContainer>
	);
};
