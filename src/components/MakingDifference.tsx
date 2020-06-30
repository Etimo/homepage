import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import tw from 'twin.macro';
import CyanHover from '../animations/CyanHover';
import FloatUp from '../animations/FloatUp';
import AnimatedH2 from '../elements/AnimatedH2';
import Caption from '../elements/Caption';
import DashedP from '../elements/DashedP';
import Span from '../elements/Span';
import { useViewportSize } from '../hooks';
import Section from './Section';

const customerTexts = [
	'Ständigt fokus på att leverera kundvärde',
	'Bidrar med teknisk kompetens och sprider den',
	'Påverkar och förbättrar proaktivt',
	'Är en ansvarstagande lagspelare',
];

const societyTexts = [
	'Jobbar pro-bono åt goda organisationer',
	'Skänker en del av vinsten till välgörenhet',
	'Open Source-projekt som gör samhällsnytta',
	'Väljer bort uppdrag som inte gör samhällsnytta',
];

const H3Title = styled.h3`
	${tw`font-quest text-xl lg:text-2xl mb-4`};
`;

const gridVar = {
	init: {},
	anim: {
		transition: {
			delay: 0.8,
			staggerChildren: 0.5,
		},
	},
};

const boxVar = {
	init: {
		opacity: 0,
		scale: 1.2,
		y: '25%',
	},
	anim: {
		opacity: 1,
		scale: 1,
		y: 0,
		originX: 0,
		transition: {
			duration: 0.8,
			ease: 'easeOut',
			type: 'tween',
		},
	},
};

export default () => {
	const [ref, inView, entry] = useInView();
	const [h, w] = useViewportSize();

	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8 overflow-hidden">
					<FloatUp>
						<Caption className="text-center">Skillnad</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Etimo gör</AnimatedH2>
						<AnimatedH2 direction="right">
							<Span secondary>&nbsp;skillnad</Span>
						</AnimatedH2>
					</div>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 mt-8 lg:mt-12 mx-6 overflow-hidden"
						ref={ref}
						variants={gridVar}
						initial="init"
						animate={inView ? 'anim' : ''}
					>
						<CyanHover
							className="flex flex-col border p-10 lg:m-4"
							variants={boxVar}
						>
							<H3Title>För kunden</H3Title>
							{customerTexts.map((cText) => {
								return <DashedP key={cText}>{cText}</DashedP>;
							})}
						</CyanHover>

						<CyanHover
							className="flex flex-col border p-10 lg:m-4"
							variants={boxVar}
						>
							<H3Title>För samhället</H3Title>
							{societyTexts.map((sText) => {
								return <DashedP key={sText}>{sText}</DashedP>;
							})}
						</CyanHover>
					</motion.div>
				</div>
			</div>
		</Section>
	);
};
