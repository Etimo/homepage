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
import Caption from '../elements/Caption';

const EmphasizedH2 = styled(H2)`
	line-height: 1.25;
	font-weight: 400;
	margin-bottom: 0;
	margin-top: auto;
`;

const About = () => {
	return (
		<Section style={{ backgroundColor: '#FFFFFF' }}>
			<div className="flex container flex-col md:flex-row px-4 lg:px-24">
				<div className="md:w-1/2">
					<FadeIn
						direction="left"
						full
						flex
						flexDirection="column"
						justifyContent="space-between"
					>
						<Caption textAlign="left">Välkommen till Etimo!</Caption>
						<EmphasizedH2>
							<Span secondary>Passion</Span> for teknik, <br />
							kundvärde och <br />
							samhällsnytta
						</EmphasizedH2>
					</FadeIn>
				</div>

				<div className="md:w-1/2">
					<FadeIn direction="right">
						<P>
							På Etimo förenas vi av en passion för att utveckla moderna
							skräddarsydda lösningar som gör skillnad och ger stort värde för
							kunden och samhället. Vi tackar nej till uppdrag vi inte gillar,
							som tex. gambling.
							<br /> <br />
							Gemenskapen och trivseln är jätteviktig för oss. Trots att vi har
							olika kunduppdrag jobbar vi tillsammans från kontoret på fredagar,
							har interna koddagar m.m.
						</P>
						<HighlightButton>Läs gärna vår blogg</HighlightButton>
					</FadeIn>
				</div>
			</div>
		</Section>
	);
};

export default About;
