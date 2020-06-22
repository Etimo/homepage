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
import tw from 'twin.macro';

const EmphasizedH2 = styled(H2)`
	line-height: 1.25;
	font-weight: 400;
	margin-bottom: 0;
	margin-top: auto;
	${tw`text-justify lg:text-left`}
`;

const About = () => {
	return (
		<Section style={{ backgroundColor: '#FFFFFF' }}>
			<div className="flex container flex-col md:flex-row px-8 lg:px-32">
				<div className="md:w-1/2">
					<FadeIn
						direction="left"
						full
						flex
						flexDirection="column"
						justifyContent="space-between"
					>
						<Caption className="text-center lg:text-left">
							Välkommen till Etimo!
						</Caption>
						<EmphasizedH2>
							<Span secondary>Passion</Span> för teknik, <br />
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
						<br />
						<HighlightButton>
							<a href="https://blog.etimo.se/" target="_blank">
								Läs gärna vår blogg
							</a>
						</HighlightButton>
					</FadeIn>
				</div>
			</div>
		</Section>
	);
};

export default About;
