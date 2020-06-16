import { motion, useCycle, Variant } from 'framer-motion';
import React, { useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import styled, { DefaultTheme } from 'styled-components';
import { useViewportSize } from '../../hooks';

type SectionProps = {
	isActive: boolean;
	theme: DefaultTheme;
};

const Section = styled(motion.div)<SectionProps>`
	text-decoration: none;
	border: none;
	margin: 1rem 0;
	font-size: 1rem;
	background-color: inherit;
	text-align: left;
	padding: 0;
	cursor: pointer;
	z-index: 100;
	overflow: hidden;
	height: 20px;
	color: ${(props) =>
		props.isActive ? props.theme.secondary : props.theme.primary};
	font-family: ${(props) => props.theme.typography.font};
`;

const variants = [
	{
		fontSize: 12,
		transition: { type: 'tween' },
	},
	{
		fontSize: 16,
		transition: { type: 'tween' },
	},
];

type Props = {
	index: number;
	isActive: boolean;
	children: React.ReactNode;
};

const SectionComponent = ({ index, isActive, children }: Props) => {
	const [viewportHeight] = useViewportSize();
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

export default SectionComponent;
