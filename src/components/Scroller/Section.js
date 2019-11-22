import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import { animateScroll } from 'react-scroll';
import { useViewportHeight } from '../../hooks';

const Section = styled(motion.div)`
	text-decoration: none;
	border: none;
	margin: 1rem 0;
	font-size: 1rem;
	background-color: inherit;
	text-align: left;
	padding: 0;
	cursor: pointer;
	z-index: 100;
	color: ${props =>
		props.isActive ? props.theme.secondary : props.theme.primary};
	font-family: ${props => props.theme.typography.font};
`;

const variants = [
	{
		// paddingLeft: 0,
		fontSize: 12
	},
	{
		// paddingLeft: 10,
		fontSize: 16
	}
];

const SectionComponent = ({ index, isActive, children }) => {
	const viewportHeight = useViewportHeight();
	const [variant, cycleVariant] = useCycle(...variants);

	useEffect(() => {
		if (isActive) {
			cycleVariant(1);
		} else {
			cycleVariant(0);
		}
	}, [isActive]);

	const clickHandler = () => {
		animateScroll.scrollTo(index * viewportHeight);
	};

	return (
		<Section animate={variant} isActive={isActive} onClick={clickHandler}>
			{children}
		</Section>
	);
};

SectionComponent.propTypes = {
	index: PropTypes.number.isRequired,
	isActive: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired
};

export default SectionComponent;
