import React from 'react';
import { FloatUp } from '../../animations';
import { Caption, DashedP, H2, Span } from '../../elements';
import Section from '../Section';

const bulletPoints = [
	'Du är vår viktigaste resurs och du väljer själv dina uppdrag, har möjlighet att påverka vilka kunder du vill jobba med och har ansvar och förtroende för hur din vardag ser ut',
	'Du har en personlig mentor som du kan bolla idéer, funderingar och tekniker med och någon som kan hjälpa dig att utvecklas',
	'10 % av din arbetstid ges till kompetensutveckling',
	'Vi har en platt organisation med korta beslutsvägar och transparens',
	'Vi har en tydlig karriärväg som du själv påverkar',
	'Du har möjlighet till delägarskap och 100 % av verksamheten ägs av seniora medarbetare',
	'Du har varierade arbetsytor och jobbar växlande inhouse och hos kund',
	'Varje fredag ser vi till att hela teamet träffas och delar med sig av erfarenheter och kunskap. Vi ser också till att ha kul, bland annat genom VR-spel i vår VR-studio',
];

const WorkingHere = () => {
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="flex container flex-col md:flex-row px-8 lg:px-32 text-left">
				<div className="flex flex-col lg:w-1/2 my-auto lg:mt-0 text-center md:text-left overflow-hidden">
					<FloatUp>
						<Caption>Jobbet</Caption>
						<H2 className="mb-4 md:mb-6 mt-2 md:mt-4">
							Att jobba på <br />
							<Span secondary>Etimo</Span>
						</H2>
					</FloatUp>
				</div>
				<div className="md:w-2/3 mx-auto overflow-hidden">
					{bulletPoints.map((bulletText) => {
						return (
							<FloatUp>
								<DashedP key={bulletText}>{bulletText}</DashedP>
							</FloatUp>
						);
					})}
				</div>
			</div>
		</Section>
	);
};

export default WorkingHere;
