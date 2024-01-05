import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { FloatInDir } from '../animations';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { H5 } from '../elements';
import React from 'react';
import tw from 'twin.macro';
import CyanHover from '../animations/CyanHover';
import FloatUp from '../animations/FloatUp';
import BlurIn from '../animations/variants/BlurIn';
import AnimatedH2 from '../elements/AnimatedH2';
import Caption from '../elements/Caption';
import DashedP from '../elements/DashedP';
import Span from '../elements/Span';
import Section from './Section';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FloatDirection } from '../animations/FloatInDir';

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

type DonationType = {
	name: string;
	url: string;
	image: JSX.Element;
	direction: FloatDirection;
	borders: {
		xs: string;
		sm: string;
	};
};

const generateDontations = (): DonationType[] => {
	const data = useStaticQuery(graphql`
		query {
			raddaBarnen: file(relativePath: { eq: "donations/raddabarnen.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			handIHand: file(relativePath: { eq: "donations/handihand.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			lakareUtanGranser: file(
				relativePath: { eq: "donations/lakareutangranser.png" }
			) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			ukraine: file(relativePath: { eq: "donations/ukraineround.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
		}
	`);
	return [
		{
			name: 'raddaBarnen',
			url: 'https://blog.etimo.se/featured/2020/12/14/radda-barnen-samarbete.html',
			image: (
				<GatsbyImage
					image={data.raddaBarnen.childImageSharp.gatsbyImageData}
					alt="Rädda barnens logga"
				/>
			),
			direction: 'down',
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
		},
		{
			name: 'handIHand',
			url: 'https://www.handinhandsweden.se/',
			image: (
				<GatsbyImage
					image={data.handIHand.childImageSharp.gatsbyImageData}
					alt="HandIHand:s logga"
				/>
			),
			direction: 'down',
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
		},
		{
			name: 'lakareUtanGranser',
			url: 'https://lakareutangranser.se/',
			image: (
				<GatsbyImage
					image={data.lakareUtanGranser.childImageSharp.gatsbyImageData}
					alt="Läkare utan gränsers logga"
				/>
			),
			direction: 'down',
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
		},
		{
			name: 'ukraine',
			url: 'https://supportukrainenow.org/',
			image: (
				<GatsbyImage
					image={data.ukraine.childImageSharp.gatsbyImageData}
					alt="Support Ukraine now:s logga"
				/>
			),
			direction: 'down',
			borders: {
				xs: 'border-b',
				sm: '',
			},
		},
	];
};

type CustomersProps = {
	imgDiv?: React.FC;
};

export default ({ imgDiv }: CustomersProps) => {
	const [ref, inView] = useInView();
	const donations = generateDontations();

	const ImageDiv = imgDiv
		? imgDiv
		: styled.div`
				${tw`mx-auto w-full max-w-xxxxxs md:max-w-xxxxxs xl:max-w-xxxxxs opacity-50 hover:opacity-100`};
				${tw`transition-opacity ease-in-out duration-200`};
		  `;

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

					<FloatUp>
						<H5 className="text-center mt-10 mx-10 text-gray-800">
							Några organisationer som Etimo har donerat till genom åren:
						</H5>
					</FloatUp>

					<div className="flex justify-center">
						<div className="grid grid-cols-4 gap-4 w-full lg:grid-cols-4 lg:w-2/4 mt-10 mx-8 xl:mx-12">
							{donations.map((donation, idx) => {
								return (
									<div key={idx}>
										<FloatInDir
											direction={donation.direction}
											delay={idx * 0.075}
										>
											<ImageDiv>
												<a href={donation.url} target="_blank">
													{donation.image}
												</a>
											</ImageDiv>
										</FloatInDir>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
