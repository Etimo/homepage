import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FadeIn from '../animations/FadeIn';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import P from '../elements/P';
import Span from '../elements/Span';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import { HighlightButton } from './Button';
import Section from './Section';
import EmphasizedH2 from '../elements/EmphasizedH2';

const GradientSpan = styled.span`
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

	${tw`border-blackGray ease-in duration-200 bg-right lg:bg-left hover:bg-right `};
`;

const About = () => {
	const [h, width] = useViewportSize();
	return (
		<Section style={{ backgroundColor: '#FFFFFF' }}>
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
							För oss är gemenskap och trivsel viktig och vi avböjer uppdrag som
							inte går i linje med våra värderingar som exempelvis gambling. I
							veckorna är vi ute på olika uppdrag hos våra kunder men på
							fredagar samlas vi alla på kontoret då vi utbyter erfarenheter och
							hjälper varandra med nya perspektiv.
							<br /> <br /> Varannan månad har vi två koddagar där vi utvecklar
							{width < sizes().desktop ? ` ` : <br />}
							<GradientSpan>
								<a href="https://github.com/Etimo" target="_blank">
									open source
								</a>
							</GradientSpan>
							&nbsp;för att ha roligt och samtidigt skapa
							{width < sizes().desktop ? ` ` : <br />}
							lösningar som kan bidra till samhällsnyttan.
						</P>
					</FadeIn>
				</div>
			</div>
		</Section>
	);
};

export default About;
