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

const PLink = styled(P)`
	border-bottom: 1px solid;
	background: linear-gradient(
		90deg,
		${(props) => props.theme.primary} 49%,
		${(props) => props.theme.secondary} 50%
	);
	background-size: 200% auto;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	${tw`inline-flex border-blackGray ease-in duration-200 bg-right lg:bg-left hover:bg-right `};
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
							kunden och samhället. Gemenskapen och trivseln är jätteviktig för
							oss och vi tackar nej till uppdrag vi inte gillar, som tex.
							gambling.
							<br /> <br />
							Vi har visserligen olika kunduppdrag, men vi jobbar tillsammans
							från kontoret på fredagar. Ibland har vi koddagar där vi
							utvecklar&nbsp;
							<PLink>
								<a href="https://github.com/Etimo" target="_blank">
									open source
								</a>
							</PLink>
							&nbsp;för att det är kul, lärorikt och förhoppningsvis är till
							nytta även för andra.
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
