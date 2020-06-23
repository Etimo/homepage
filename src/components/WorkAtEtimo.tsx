import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FadeIn from '../animations/FadeIn';
import Caption from '../elements/Caption';
import Col from '../elements/Col';
import Container from '../elements/Container';
import DashedP from '../elements/DashedP';
import H2 from '../elements/H2';
import Row from '../elements/Row';
import Span from '../elements/Span';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import Section from './Section';

const CustomBackground = styled.div<{ offset: number }>`
	position: absolute;
	height: 100%;
	left: calc(50% + 250px);
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
	${tw`lg:max-w-xxxs xl:max-w-xxs mb-2 md:mb-3 lg:mb-4 xl:mb-6`}
`;

/* Shadow won't appear without margin */
const StyledImg = styled(Img)`
	box-shadow: 0px 0px 15px -2px rgba(120, 120, 120, 1);
	margin: 30px;
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
			<Container>
				<Row justifyContent="center" mb={-30}>
					<Col sm mb={30} flex justifyContent="center" flexDirection="column">
						<FadeIn
							direction="left"
							flex
							flexDirection="column"
							justifyContent="space-between"
						>
							<Caption className="text-center lg:text-left">
								Att jobba på Etimo
							</Caption>
							<EmphasizedH2 className="text-center lg:text-left">
								Hur är det att <Span secondary>jobba </Span>
								på Etimo?
							</EmphasizedH2>
							<div className="mx-4 lg:mx-0">
								{workItems.map((text) => {
									return <DashedP>{text}</DashedP>;
								})}
							</div>
						</FadeIn>
					</Col>
					<Col sm mb={30}>
						<FadeIn direction="right">
							<StyledImg fluid={data.image.childImageSharp.fluid} />
						</FadeIn>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};

export default WorkAtEtimo;
