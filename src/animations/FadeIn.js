import React from 'react';
import propTypes from 'prop-types';
import posed from 'react-pose';

const FadeInAnimation = ({ children, delay, duration, ...props }) => {
	const FadeIn = posed.div({
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			delay,
			transition: {
				duration
			}
		}
	});

	return (
		<FadeIn initialPose="hidden" pose="visible">
			{children}
		</FadeIn>
	);
};

FadeInAnimation.defaultProps = {
	delay: 0,
	duration: 1000
};

FadeInAnimation.propTypes = {
	children: propTypes.element.isRequired,
	delay: propTypes.number,
	duration: propTypes.number
};

export default FadeInAnimation;
