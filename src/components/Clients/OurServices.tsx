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

const developingTeamTexts = [
	'Helhetslösning och partnerskap att förverkliga din idé från start till mål',
	'Utvecklare med tidigare erfarenhet från framgångsrika start-ups, konsumentprodukter och affärskritiska system',
	'Produktrådgivning för att bygga rätt produkt utifrån dina mål och finansiella förutsättningar',
];

const developmentTexts = [
	'Uppskalning av team med en eller flera utvecklare',
	'Seniora utvecklare med bred teknisk erfarenhet av olika språk, DevOps, systemarkitektur och molntjänster',
];

const productTexts = [
	'Interim produktägare, produktchef och CPO med mångårig erfarenhet inom produktledning på start-ups och growth företag',
	'Coachning och mentorskap av produktteam och produktledare för att lyfta produkt-hantverk och bygga rätt produkt',
];

const leaderText = [
	'Ledare med mångårig erfarenhet av roller som CTO,  team lead, agila coacher och produktledning',
	'Erfarenhet av att bygga högpresterande och agila självgående team med fokus på god trivsel',
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
							<H3Title>Utvecklingsteam</H3Title>
							{developingTeamTexts.map((cText) => {
								return <DashedP key={cText}>{cText}</DashedP>;
							})}
						</CyanHover>

						<CyanHover
							className="flex flex-col border p-10 lg:m-4"
							variants={BlurIn()}
						>
							<H3Title>Utvecklare</H3Title>
							{developmentTexts.map((sText) => {
								return <DashedP key={sText}>{sText}</DashedP>;
							})}
						</CyanHover>

						<CyanHover
							className="flex flex-col border p-10 lg:m-4"
							variants={BlurIn()}
						>
							<H3Title>Produktledning</H3Title>
							{productTexts.map((sText) => {
								return <DashedP key={sText}>{sText}</DashedP>;
							})}
						</CyanHover>

						<CyanHover
							className="flex flex-col border p-10 lg:m-4"
							variants={BlurIn()}
						>
							<H3Title>Ledarskap och förändringsarbete</H3Title>
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
