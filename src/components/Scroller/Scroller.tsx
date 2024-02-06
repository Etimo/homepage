import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useViewportSize } from '../../hooks';
import Section from './Section';

import { animateScroll } from 'react-scroll';

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
	sections: { index: number; name: string; height: number }[];
};

export default ({ sections }: Props) => {
	const [viewportHeight] = useViewportSize();
	const [activeSection, setActiveSection] = useState(0);
	useScrollPosition(
		({ currPos }) => {
			const screenMid = Math.abs(currPos.y) + viewportHeight / 2;

			const spanStart = sections
				.filter((section) => section.index < activeSection)
				.map((section) => section.height)
				.reduce(
					(accumulatedHeight, sectionHeight) =>
						accumulatedHeight + sectionHeight,
					0
				);
			const spanEnd = sections
				.filter((section) => section.index <= activeSection)
				.map((section) => section.height)
				.reduce(
					(accumulatedHeight, sectionHeight) =>
						accumulatedHeight + sectionHeight,
					0
				);

			if (screenMid < spanStart) {
				setActiveSection(activeSection - 1);
			} else if (screenMid > spanEnd) {
				setActiveSection(activeSection + 1);
			}
		},
		[sections, activeSection],
		undefined,
		false,
		50
	);

	const clickHandler = (index: number) => {
		const scrollToHeight = sections
			.filter((section) => section.index < index)
			.map((section) => section.height)
			.reduce(
				(accumulatedHeight, sectionHeight) => accumulatedHeight + sectionHeight,
				0
			);
		animateScroll.scrollTo(scrollToHeight);
	};

	return (
		<motion.div variants={opacVar} initial="init" animate="anim">
			<Holder>
				{sections.map((section) => (
					<Section
						key={section.name}
						index={section.index}
						isActive={section.index === activeSection}
						sectionHeight={section.height}
						clickHandler={clickHandler}
					>
						{section.name}
					</Section>
				))}
			</Holder>
		</motion.div>
	);
};
