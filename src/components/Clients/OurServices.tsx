import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';
import Section from '../Section';
import { AnimatedH2, Caption, Span } from '../../elements';
import { CyanHover, FloatUp } from '../../animations';
import BlurIn from '../../animations/variants/BlurIn';
import DashedP from '../DashedP';

const startupTexts = [
	'Teknisk kompetens för att bygga din idé',
	'Erfarenhet av nyutveckling från tidigare startup-projekt',
	'Produktrådgivning för att bygga rätt produkt',
	'Helhetslösningar för utveckling och finansiering via Etimo Ventures',
];

const developmentTexts = [
	'Skräddarsydda digitala lösningar',
	'Skala upp ditt team med en eller flera kompetenta utvecklare',
	'Molntjänster, DevOps och automatisering',
	'Nyutveckling och vidareutveckling av befintliga system',
	'Vi bygger skalbart, säkert och effektivt',
];

const leaderText = [
	'Vi erbjuder exempelvis CTO, Tech Lead, produktledning och seniora utvecklare',
	'Vi leder effektiva utvecklingsteam med god trivsel',
	'Teknikval baserade på mångårig erfarenhet av stora digitala system',
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

export const OurServices = () => {
	const [ref, inView] = useInView({ triggerOnce: true });

	return (
		<Section>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8 overflow-hidden">
					<FloatUp>
						<Caption className="text-center">Tjänster</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Etimo </AnimatedH2>
						<AnimatedH2 direction="right">
							<Span>&nbsp;erbjuder</Span>
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
							variants={BlurIn()}
						>
							<H3Title>Startup</H3Title>
							{startupTexts.map((cText) => {
								return <DashedP key={cText}>{cText}</DashedP>;
							})}
						</CyanHover>

						<CyanHover
							className="flex flex-col border p-10 lg:m-4"
							variants={BlurIn()}
						>
							<H3Title>Utveckling</H3Title>
							{developmentTexts.map((sText) => {
								return <DashedP key={sText}>{sText}</DashedP>;
							})}
						</CyanHover>

						<CyanHover
							className="flex flex-col border p-10 lg:m-4"
							variants={BlurIn()}
						>
							<H3Title>Ledarskap</H3Title>
							{leaderText.map((cText) => {
								return <DashedP key={cText}>{cText}</DashedP>;
							})}
						</CyanHover>
					</motion.div>
				</div>
			</div>
		</Section>
	);
};
