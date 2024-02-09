import { motion, useCycle } from 'framer-motion';
import React, { useEffect } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { sizes } from '../../helpers';
import { useViewportSize } from '../../hooks';

type SectionProps = {
	$isActive: boolean;
	$hasAtLeastTabletHeight: boolean;
	theme: DefaultTheme;
};

const Section = styled(motion.div)<SectionProps>`
	text-decoration: none;
	border: none;
	font-size: 12px;
	background-color: inherit;
	text-align: left;
	padding: 0;
	margin: ${(props) => (props.$hasAtLeastTabletHeight ? '1rem 0' : '0.4rem 0')};
	cursor: pointer;
	z-index: 100;
	overflow: hidden;
	height: 20px;
	color: ${(props) => (props.$isActive ? props.theme.secondary : '#888888')};
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
	sectionHeight: number;
	isActive: boolean;
	children: React.ReactNode;
	clickHandler: (index: number) => void;
};

const SectionComponent = ({
	index,
	isActive,
	children,
	clickHandler,
}: Props) => {
	const [viewportHeight] = useViewportSize();
	const [variant, cycleVariant] = useCycle(...variants);

	useEffect(() => {
		if (isActive) {
			cycleVariant(1);
		} else {
			cycleVariant(0);
		}
	}, [isActive]);

	return (
		<Section
			$isActive={isActive}
			$hasAtLeastTabletHeight={viewportHeight >= sizes().tablet}
			onClick={() => clickHandler(index)}
			animate={variant}
		>
			{children}
		</Section>
	);
};

export default SectionComponent;
