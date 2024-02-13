import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';
import { CyanHover } from '../../animations';
import BlurIn from '../../animations/variants/BlurIn';
import DashedP from '../DashedP';

const developingTeamTexts = [
	'Helhetsåtagande och partnerskap.',
	'Utvecklare med erfarenhet från framgångsrika start-ups, konsumentprodukter och affärskritiska system.',
	'Produktrådgivning för att bygga rätt produkt.',
	'Bred teknisk kompetens.',
];

const developmentTexts = [
	'Uppskalning av ditt team med en eller flera utvecklare.',
	'Seniora utvecklare med bred teknisk kompetens och lång erfarenhet.',
	'Tillgång till hela Etimos erfarenhetsbas.',
];

const productTexts = [
	'Interim produktägare, produktchef och CPO med mångårig erfarenhet. ',
	'Coachning och mentorskap av produktteam.',
	'Utbilda, föreläsa och facilitera workshops inom produktledarskap och produktstrategi.',
];

const leaderText = [
	'Ledare med erfarenhet av roller som CTO,  team lead och agila coacher.',
	'Erfarenhet av att bygga högpresterande, agila och självgående team.',
	'Utbilda och föreläsa om agilt förändringsarbete.  ',
];

const H3Title = styled.h3`
	${tw`font-quest text-xl lg:text-2xl`};
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
		<motion.div
			className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 mx-6 overflow-hidden"
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
	);
};
