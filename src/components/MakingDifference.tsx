import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import tw from 'twin.macro';
import CyanHover from '../animations/CyanHover';
import FloatUp from '../animations/FloatUp';
import BlurIn from '../animations/variants/BlurIn';
import AnimatedH2 from '../elements/AnimatedH2';
import Caption from '../elements/Caption';
import DashedP from '../elements/DashedP';
import Span from '../elements/Span';
import Section from './Section';
import Img from 'gatsby-image';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { HighlightButton } from './Button';
import { P } from '../elements';

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

export default () => {
	const [ref, inView] = useInView();

	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "samarbetslogotyp-raddabarnen.png" }) {
				childImageSharp {
					fluid(maxWidth: 800) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Section>
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
							variants={BlurIn()}
						>
							<H3Title>För kunden</H3Title>
							{customerTexts.map((cText) => {
								return <DashedP key={cText}>{cText}</DashedP>;
							})}
						</CyanHover>

						<CyanHover
							className="flex flex-col border p-10 lg:m-4"
							variants={BlurIn()}
						>
							<H3Title>För samhället</H3Title>
							{societyTexts.map((sText) => {
								return <DashedP key={sText}>{sText}</DashedP>;
							})}
						</CyanHover>
					</motion.div>
					<div className="mt-4 mx-auto flex flex-col" style={{ width: '70%' }}>
						<Img fluid={data.file.childImageSharp.fluid} />
						<HighlightButton className="mx-auto">
							<Link to="https://blog.etimo.se/featured/2020/12/14/radda-barnen-samarbete.html">
								<P>
									Läs på vår blogg om samarbetet med Rädda Barnen där vi är
									hållbarhetspartner
								</P>
							</Link>
						</HighlightButton>
					</div>
				</div>
			</div>
		</Section>
	);
};
