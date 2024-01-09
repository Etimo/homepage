import { motion, useCycle } from 'framer-motion';
import React, { useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import styled, { DefaultTheme } from 'styled-components';
import { sizes } from '../../helpers';
import { useViewportSize } from '../../hooks';

type SectionProps = {
	isActive: boolean;
	theme: DefaultTheme;
};

const Section = styled(motion.div)<SectionProps>`
	text-decoration: none;
	border: none;
	margin: 1rem 0;
	font-size: 12px;
	background-color: inherit;
	text-align: left;
	padding: 0;
	cursor: pointer;
	z-index: 100;
	overflow: hidden;
	height: 20px;
	color: ${(props) => (props.isActive ? props.theme.secondary : '#888888')};
	font-family: ${(props) => props.theme.typography.headline.font};
`;

const variants = [
	{
		fontSize: '12px',
		transition: { type: 'tween' },
	},
	{
		fontSize: '16px',
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
	const sectionHeight =
		viewportHeight < sizes().minimumHeight
			? sizes().minimumHeight
			: viewportHeight;

	useEffect(() => {
		if (isActive) {
			cycleVariant(1);
		} else {
			cycleVariant(0);
		}
	}, [isActive]);

	const clickHandler = () => {
		animateScroll.scrollTo(index * sectionHeight);
	};

	return (
		<Section isActive={isActive} onClick={clickHandler} animate={variant}>
			{children}
		</Section>
	);
};

export default SectionComponent;
