import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useViewportSize } from '../../hooks';
import Section from './Section';
import tw from 'twin.macro';

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
	width: 100px;
`;

const sections = [
	{
		index: 0,
		name: 'Start',
	},
	{
		index: 1,
		name: 'Jobba Här',
	},
	{
		index: 2,
		name: 'Om Oss',
	},
	{
		index: 3,
		name: 'Människorna',
	},
	{
		index: 4,
		name: 'Kunder',
	},
	{
		index: 5,
		name: 'Skillnad',
	} /*,
	{
		index: 6,
		name: 'Kontakt',
	}*/,
];

export default () => {
	const [viewportHeight] = useViewportSize();
	const [activeSection, setActiveSection] = useState(0);

	useScrollPosition(
		({ currPos }) => {
			const screenMid = Math.abs(currPos.y) + viewportHeight / 2;
			const spanStart = activeSection * viewportHeight;
			const spanEnd = (activeSection + 1) * viewportHeight;
			if (screenMid < spanStart) {
				setActiveSection(sections[activeSection].index - 1);
			} else if (screenMid > spanEnd) {
				setActiveSection(sections[activeSection].index + 1);
			}
		},
		[viewportHeight, activeSection],
		undefined,
		false,
		50
	);

	return (
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
	);
};
