import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sizes } from '../../helpers';
import { useViewportSize } from '../../hooks';
import Section from './Section';

const Holder = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	top: 50%;
	left: 0%;
	margin-left: 2rem;
	transform: translateY(-50%);
	z-index: 10;
	width: 150px;
`;

const opacVar = {
	init: {
		opacity: 0,
	},
	anim: {
		opacity: 1,
		transition: {
			delay: 0.8,
			duration: 0.5,
		},
	},
};

type Props = {
	givenSections?: { index: number; name: string }[];
};

export default ({ givenSections, ...props }: Props) => {
	const [viewportHeight] = useViewportSize();
	const [activeSection, setActiveSection] = useState(0);
	const sectionHeight =
		viewportHeight < sizes().minimumHeight
			? sizes().minimumHeight
			: viewportHeight;

	useScrollPosition(
		({ currPos }) => {
			const screenMid = Math.abs(currPos.y) + viewportHeight / 2;
			const spanStart = activeSection * sectionHeight;
			const spanEnd = (activeSection + 1) * sectionHeight;

			if (screenMid < spanStart) {
				setActiveSection(activeSection - 1);
			} else if (screenMid > spanEnd) {
				setActiveSection(activeSection + 1);
			}
		},
		[sectionHeight, activeSection],
		undefined,
		false,
		50
	);

	const sections = givenSections
		? givenSections
		: [
				{
					index: 0,
					name: 'Start',
				},
				{
					index: 1,
					name: 'Vår passion',
				},
				{
					index: 2,
					name: 'Att jobba här',
				},
				{
					index: 3,
					name: 'Några av oss',
				},
				{
					index: 4,
					name: 'Våra kunder',
				},
				{
					index: 5,
					name: 'Kul på jobbet',
				},
				{
					index: 6,
					name: 'Vi gör skillnad',
				},
		  ];

	return (
		<motion.div variants={opacVar} initial="init" animate="anim">
			<Holder>
				{sections.map((section) => (
					<Section
						key={section.name}
						index={section.index}
						isActive={section.index === activeSection}
					>
						{section.name}
					</Section>
				))}
			</Holder>
		</motion.div>
	);
};
