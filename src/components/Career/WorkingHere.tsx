import React from 'react';
import { FloatUp } from '../../animations';
import { Caption, H2, Span } from '../../elements';
import Section from '../Section';
import DashedP from '../DashedP';

const bulletPoints = [
	'Du är vår viktigaste resurs och vi är måna om att du har ett uppdrag där du trivs',
	'Du har en personlig mentor som du kan bolla idéer, funderingar och tekniker med och någon som kan hjälpa dig att utvecklas',
	'10 % av din arbetstid ges till kompetensutveckling',
	'Vi har en platt organisation med korta beslutsvägar och transparens',
	'Vi har en tydlig karriärväg som du själv påverkar',
	'Du har möjlighet till delägarskap och 100 % av verksamheten ägs av seniora medarbetare',
	'Du har varierade arbetsytor och jobbar växlande inhouse och hos kund',
	'Varje fredag ser vi till att hela teamet träffas och delar med sig av erfarenheter och kunskap. Vi ser också till att ha kul, bland annat genom VR-spel i vår VR-studio',
	'Vi jobbar utifrån våra värdeord som är kompetens, öppenhet och samhällsnytta',
];

type WorkingHereProps = {
	sectionHeight: number;
};

const WorkingHere = (props: WorkingHereProps) => {
	const { sectionHeight } = props;
	return (
		<Section sectionHeight={sectionHeight}>
			<div className="flex container flex-col md:flex-row px-8 lg:px-32 text-left">
				<div className="flex flex-col lg:w-1/2 my-auto md:mt-60p lg:mt-0 text-center md:text-left overflow-hidden">
					<FloatUp>
						<Caption>Jobbet</Caption>
						<H2 className="mb-4 md:mb-6 mt-2 md:mt-4">
							Att jobba på <br />
							<Span>Etimo</Span>
						</H2>
					</FloatUp>
				</div>
				<div className="w-11/12 md:w-2/3 mx-auto overflow-hidden">
					{bulletPoints.map((bulletText) => {
						return (
							<FloatUp key={bulletText}>
								<DashedP className="mt-2">{bulletText}</DashedP>
							</FloatUp>
						);
					})}
				</div>
			</div>
		</Section>
	);
};

export default WorkingHere;
