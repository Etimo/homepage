import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React, { useState } from 'react';
import styled from 'styled-components';
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

const sections = [
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
		name: 'Kunder',
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

export default () => {
	const [viewportHeight] = useViewportSize();
	const [activeSection, setActiveSection] = useState(0);

	useScrollPosition(
		({ currPos }) => {
			const screenMid = Math.abs(currPos.y) + viewportHeight / 2;
			const spanStart = activeSection * viewportHeight;
			const spanEnd = (activeSection + 1) * viewportHeight;

			if (screenMid < spanStart) {
				setActiveSection(activeSection - 1);
			} else if (screenMid > spanEnd) {
				setActiveSection(activeSection + 1);
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
