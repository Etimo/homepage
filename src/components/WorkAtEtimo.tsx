import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FadeIn from '../animations/FadeIn';
import { P } from '../elements';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import Span from '../elements/Span';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';
import { HighlightButton } from './Button';
import Section from './Section';
import DashedP from './DashedP';

type CustomBackgroundProps = {
	offset: number;
	height: number;
};

const CustomBackground = styled.div<CustomBackgroundProps>`
	position: absolute;
	height: ${(props) => props.height + 'px'};
	left: calc(50% + 275px);
	top: ${(props) => props.offset + 'px'};
	right: 0;
	bottom: 0;
	display: block;
	z-index: 0;
	background-color: white;
`;

const EmphasizedH2 = styled(H2)`
	line-height: 1.25;
	font-weight: 400;
	${tw`lg:max-w-xxxs xl:max-w-xxs mb-4 xl:mb-6 text-center lg:text-left`}
`;

/* Shadow won't appear without margin */
const StyledImg = styled(GatsbyImage)`
	box-shadow: 0px 0px 15px -2px rgba(120, 120, 120, 1);
	${tw`m-4 lg:m-6`};
`;

const workItems = [
	'Du väljer själv dina uppdrag',
	'10% av din tid är kompetensutveckling',
	'Du har en personlig mentor',
	'Du har tydlig karriärväg i en organisation med platt hierarki och transparens',
	'Du har möjlighet till delägarskap (bolaget ägs till 100% av seniora medarbetare)',
	'Du jobbar ibland inhouse och ibland ute hos kund',
	'Fredagar jobbar vi alla från kontoret (och många av oss spelar VR i vår VR-studio)',
	'Vi jobbar utifrån våra värdeord som är kompetens, öppenhet och samhällsnytta',
];
type Props = {
	sectionHeight: number;
};
const WorkAtEtimo = ({ sectionHeight }: Props) => {
	const data = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "bollhavny.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 360, quality: 90)
				}
			}
		}
	`);

	const [height, width] = useViewportSize();

	return (
		<Section sectionHeight={sectionHeight}>
			{width >= sizes().laptop && sectionHeight && (
				<CustomBackground offset={sectionHeight * 2} height={sectionHeight} />
			)}
			<div className="container xl:px-24 lg:max-h-95">
				<div className="flex flex-col xl:pl-12 lg:flex-row items-center lg:justify-center">
					<div className="w-4/5 sm:w-3/4 lg:w-3/5 lg:mr-2 xl:mr-4 mb-2 lg:mb-0">
						<FadeIn direction="left">
							<Caption className="text-center lg:text-left">
								Att jobba på Etimo
							</Caption>
							<EmphasizedH2>
								Hur är det att <Span>jobba </Span>
								på Etimo?
							</EmphasizedH2>
							<div className="mx-4 lg:mx-0">
								{workItems.map((text) => {
									return <DashedP key={text}>{text}</DashedP>;
								})}
							</div>
							<br />
							<div className="text-center lg:text-left">
								<HighlightButton>
									<Link to="/karriar">
										<P>Läs mer om att jobba hos oss</P>
									</Link>
								</HighlightButton>
							</div>
						</FadeIn>
					</div>
					<div className="w-4/5 sm:w-3/5 lg:w-2/5">
						<FadeIn direction="right">
							<StyledImg
								image={data.image.childImageSharp.gatsbyImageData}
								alt="Kollegor i bollhavet"
							/>
						</FadeIn>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default WorkAtEtimo;
