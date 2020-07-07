import React from 'react';
import { FadeIn, FloatUp } from '../../animations';
import { AnimatedH2, Caption, DashedP, H3, P, Span } from '../../elements';
import Section from '../Section';

const thriveTexts = [
	'Du har en stark vilja att ständigt lära mer och utvecklas i din yrkesroll',
	'Du sätter teamets gemensamma prestation och gemensamt uppsatta mål främst',
	'Du inspireras av att verka i en platt hierarki med duktiga kollegor och tar stort eget ansvar',
];

const whoTexts = [
	'Du är utvecklare på antingen junior och senior nivå, frontend eller backend',
	'Du kan visa på att du är duktig på programmering med ditt favoritspråk',
	'Du är ambitiös och vill skapa kundvärde, användarnytta för kunder och samhällsnytta',
	'Pratar flytande svenska och engelska',
];

const WhoAreYou = () => {
	return (
		<Section style={{ overflow: 'hidden' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<FloatUp>
					<Caption>Vi söker de allra bästa</Caption>
				</FloatUp>
				<div className="flex flex-col md:flex-row justify-center">
					<AnimatedH2 direction="left">
						Är <Span secondary>du</Span> vår&nbsp;
					</AnimatedH2>
					<AnimatedH2 direction="right">nästa kollega?</AnimatedH2>
				</div>
				<div className="md:w-3/4 mx-auto text-left mt-4 lg:mt-6">
					<FadeIn direction="right">
						<P>
							Har du ett genuint intresse för utveckling och programmering?
							<br /> Vill du vara med på resan att bygga upp Sveriges ledande
							utvecklingsorganisation, så har du hittat rätt! Vi söker vår nästa
							kollega som vill vara med och växa med oss och bidra till vår
							organisation där din personlighet och drivkraft är viktiga
							komponenter - resten kan man lära sig på vägen!
						</P>
					</FadeIn>
					<FadeIn direction="left">
						<H3 className="text-left mt-6"> Du trivs hos oss om:</H3>
						{thriveTexts.map((tText) => {
							return (
								<DashedP className="text-left" key={tText}>
									{tText}
								</DashedP>
							);
						})}
					</FadeIn>
					<FadeIn direction="right">
						<H3 className="text-left mt-6">Vem är du?</H3>
						{whoTexts.map((wText) => {
							return (
								<DashedP className="text-left" key={wText}>
									{wText}
								</DashedP>
							);
						})}
					</FadeIn>
				</div>
			</div>
		</Section>
	);
};

export default WhoAreYou;
