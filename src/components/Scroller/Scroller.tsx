import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Section from './Section';
import { useViewportHeight } from '../../hooks';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

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
	width: 90px;

	@media print, screen and (max-width: ${(props) => props.theme.sizes.medium}) {
		display: none;
	}
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
		name: 'Värderingar',
	},
	{
		index: 4,
		name: 'Förmåner',
	},
	{
		index: 5,
		name: 'Kontakt',
	},
];

export default () => {
	const viewportHeight = useViewportHeight();
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
		null,
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
