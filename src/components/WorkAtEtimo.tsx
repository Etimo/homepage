import React from 'react';
import Section from './Section';
import Row from '../elements/Row';
import Col from '../elements/Col';
import Container from '../elements/Container';
import styled from 'styled-components';
import FadeIn from '../animations/FadeIn';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import P from '../elements/P';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Span from '../elements/Span';

const CustomBackground = styled.div`
	left: calc(50% + 250px);
	position: relative;
	top: 0;
	right: 0;
	bottom: 0;
	display: block;
	z-index: -1;
	background-color: #ffffff;
`;

const EmphasizedH2 = styled(H2)`
	line-height: 1.25;
	font-weight: 400;
`;

/* Shadow won't appear without margin */
const StyledImg = styled(Img)`
	box-shadow: 0px 0px 15px -2px rgba(120, 120, 120, 1);
	margin: 30px;
`;

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

	return (
		<Section>
			<Container>
				<Row justifyContent="center" mb={-30}>
					<Col sm mb={30} flex justifyContent="center" flexDirection="column">
						<FadeIn
							direction="left"
							flex
							flexDirection="column"
							justifyContent="space-between"
						>
							<Caption textAlign="left">Att jobba på Etimo</Caption>
							<EmphasizedH2>
								Hur är det att <Span secondary>jobba </Span>
								på Etimo?
							</EmphasizedH2>
							<P style={{ lineHeight: 1.7 }}>
								- Du väljer själv dina uppdrag <br />
								- 10% av din tid är kompetensutveckling <br />
								- Du har en personlig mentor <br />
								- Du har tydlig karriärväg i en organisation med platt hierarki
								och transparens <br />
								- Du har möjlighet till delägarskap (bolaget ägs till 100% av
								seniora medarbetare) <br />
								- Du jobbar ibland inhouse och ibland ute hos kund <br />-
								Fredagar jobbar vi alla från kontoret (och många av oss spelar
								VR i vår VR-studio)
							</P>
						</FadeIn>
					</Col>
					<Col sm mb={30}>
						<FadeIn direction="right">
							<StyledImg fluid={data.image.childImageSharp.fluid} />
						</FadeIn>
					</Col>
				</Row>
			</Container>
			<CustomBackground />
		</Section>
	);
};

export default WorkAtEtimo;
