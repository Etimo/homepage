import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FadeIn from '../animations/FadeIn';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import P from '../elements/P';
import Span from '../elements/Span';
import { HighlightButton } from './Button';
import Section from './Section';

const EmphasizedH2 = styled(H2)`
	line-height: 1.25;
	font-weight: 400;
	margin-bottom: 0;
	${tw`text-center lg:text-left md:mt-4 lg:mt-6 xl:mt-8`}
`;

const About = () => {
	return (
		<Section style={{ backgroundColor: '#FFFFFF' }}>
			{/* This needs to switch to row at lg(1024)*/}
			<div className="flex container flex-col md:flex-row px-8 lg:px-32">
				<div className="md:w-1/2">
					<FadeIn direction="left" flex flexDirection="column">
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

				<div className="md:w-1/2 text-center sm:text-left">
					<FadeIn direction="right">
						<P className="mt-6  md:mt-0">
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
								<P>Läs gärna vår blogg</P>
							</a>
						</HighlightButton>
					</FadeIn>
				</div>
			</div>
		</Section>
	);
};

export default About;
