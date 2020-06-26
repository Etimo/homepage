import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FadeIn from '../animations/FadeIn';
import Caption from '../elements/Caption';
import DashedP from '../elements/DashedP';
import H2 from '../elements/H2';
import Span from '../elements/Span';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import Section from './Section';

const CustomBackground = styled.div<{ offset: number }>`
	position: absolute;
	height: 100%;
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
	${tw`lg:max-w-xxxs xl:max-w-xxs mb-3 md:mb-4 xl:mb-6 text-center lg:text-left`}
`;

/* Shadow won't appear without margin */
const StyledImg = styled(Img)`
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
];

const WorkAtEtimo = () => {
	const data = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "bollhav2.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const [height, width] = useViewportSize();

	return (
		<Section>
			{width >= sizes().laptop && <CustomBackground offset={height * 2} />}
			<div className="container xl:px-12">
				<div className="flex flex-col lg:flex-row items-center lg:justify-end">
					<div className="w-4/5 sm:w-3/4 lg:w-2/5 lg:mr-2 xl:mr-4 mb-2 lg:mb-0">
						<FadeIn direction="left">
							<Caption className="text-center lg:text-left">
								Att jobba på Etimo
							</Caption>
							<EmphasizedH2>
								Hur är det att <Span secondary>jobba </Span>
								på Etimo?
							</EmphasizedH2>
							<div className="mx-4 lg:mx-0">
								{workItems.map((text) => {
									return <DashedP>{text}</DashedP>;
								})}
							</div>
						</FadeIn>
					</div>
					<div className="w-4/5 sm:w-3/5 lg:w-1/2">
						<FadeIn direction="right">
							<StyledImg fluid={data.image.childImageSharp.fluid} />
						</FadeIn>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default WorkAtEtimo;
