import React from 'react';
import { H2, P, Span } from '../../elements';
import Section from '../Section';

const WorkingHere = () => {
	return (
		<Section headerSpace style={{ backgroundColor: 'white', height: 'auto' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<H2 className="mb-4 md:mb-6">
					Att jobba på <Span primary>Etimo</Span> -<br />
					vi söker de allra <Span secondary>bästa</Span>
				</H2>
				<P>
					Du är vår viktigaste resurs och du väljer själv dina uppdrag, har
					möjlighet att påverka vilka kunder du vill jobba med och har ansvar
					och förtroende för hur din vardag ser ut Du har en personlig mentor
					som du kan bolla idéer, funderingar och tekniker med och någon som kan
					hjälpa dig att utvecklas 10 % av din arbetstid ges till
					kompetensutveckling Vi har en platt organisation med korta
					beslutsvägar och transparens Vi har en tydlig karriärväg som du själv
					påverkar Du har möjlighet till delägarskap och 100 % av verksamheten
					ägs av seniora medarbetare Du har varierade arbetsytor och jobbar
					växlande inhouse och hos kund Varje fredag ser vi till att hela teamet
					träffas och delar med sig av erfarenheter och kunskap. Vi ser också
					till att ha kul, bland annat genom VR-spel i vår VR-studio
				</P>
			</div>
		</Section>
	);
};

export default WorkingHere;
