import React from 'react';
import Container from '../elements/Container';
import Section from './Section';
import Row from '../elements/Row';
import Col from '../elements/Col';
import FadeIn from '../animations/FadeIn';
import styled from 'styled-components';
import H2 from '../elements/H2';
import Span from '../elements/Span';
import { HighlightButton } from './Button';
import P from '../elements/P';

const EmphasizedH2 = styled(H2)`
	line-height: 1.25;
	font-weight: 400;
	margin-bottom: 0;
	margin-top: auto;
`;

const About = () => {
	return (
		<Section style={{ backgroundColor: '#FFFFFF' }}>
			<Container>
				<Row justifyContent="center" mb={-30}>
					<Col sm mb={30}>
						<FadeIn direction="left">
							<Span style={{ letterSpacing: 1 }}>Välkommen till Etimo!</Span>
							<EmphasizedH2>
								<Span secondary>Passion</Span> for teknik, <br />
								kundvärde och <br />
								samhällsnytta
							</EmphasizedH2>
						</FadeIn>
					</Col>
					<Col sm mb={30}>
						<FadeIn direction="right">
							<P>
								På Etimo förenas vi av en passion för att utveckla moderna
								skräddarsydda lösningar som gör skillnad och ger stort värde för
								kunden och samhället. Vi tackar nej till uppdrag vi inte gillar,
								som tex. gambling.
								<br /> <br />
								Gemenskapen och trivseln är jätteviktig för oss. Trots att vi
								har olika kunduppdrag jobbar vi tillsammans från kontoret på
								fredagar, har interna koddagar m.m.
							</P>
							<HighlightButton>Läs gärna vår blogg</HighlightButton>
						</FadeIn>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};

export default About;
