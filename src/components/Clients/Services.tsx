import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CyanHover, FloatUp } from '../../animations';
import { AnimatedH2, Caption, H4, Span } from '../../elements';
import Section from '../Section';
import DashedP from '../DashedP';

const gridVar = {
	init: {},
	anim: {
		transition: {
			delay: 0.8,
			staggerChildren: 0.5,
		},
	},
};

const contributions = [
	'Ständigt fokus på att leverera kundvärde',
	'Bidrar med teknisk kompetens och sprider den',
	'Påverkar och förbättrar proaktivt',
	'Är en ansvarstagande lagspelare',
];

const evaluations = [
	'Vi genomför löpande kundutvärderingar',
	'Kunderna ger oss toppbetyg',
	'100% av kunderna säger att de vill jobba med oss igen',
];

const Services = () => {
	const [ref, inView] = useInView({ triggerOnce: true });

	return (
		<Section>
			<div className="flex container flex-col px-8 xl:px-32 text-center overflow-hidden">
				<FloatUp>
					<Caption>Nöjda kunder</Caption>
				</FloatUp>
				<div className="flex flex-col md:flex-row justify-center">
					<AnimatedH2 direction="left">Våra tjänster&nbsp;</AnimatedH2>
					<AnimatedH2 direction="right">
						får <Span>toppbetyg</Span>
					</AnimatedH2>
				</div>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 mt-8 lg:mt-12 mx-0 lg:mx-6 overflow-hidden text-left self-center"
					ref={ref}
					variants={gridVar}
					initial="init"
					animate={inView ? 'anim' : ''}
				>
					<FloatUp>
						<CyanHover className="flex flex-col border p-10 md:h-full lg:m-4 lg:h-auto">
							<H4 className="mb-2 md:mb-4">Vår insats</H4>
							{contributions.map((cText) => {
								return <DashedP key={cText}>{cText}</DashedP>;
							})}
						</CyanHover>
					</FloatUp>

					<FloatUp>
						<CyanHover className="flex flex-col border p-10 md:h-full lg:m-4 lg:h-auto">
							<H4 className="mb-2 md:mb-4">Kundernas utvärdering</H4>
							{evaluations.map((eText) => {
								return <DashedP key={eText}>{eText}</DashedP>;
							})}
						</CyanHover>
					</FloatUp>
				</motion.div>
			</div>
		</Section>
	);
};

export default Services;
