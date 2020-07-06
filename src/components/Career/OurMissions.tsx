import React from 'react';
import { H2, P } from '../../elements';
import Section from '../Section';

const devTexts = [
	'Webbaserad betalningslösning åt en ledande aktör inom e-handelsbetalning',
	'Automatisk testsvit för en digital konsumenttjänst',
	'Webbapplikation för automatiserad rådgivning åt en stor svensk bank. Applikationen är en integrerad del av internetbanken',
	'Nyutveckling av lösning som identifierar kontokortsbedrägerier åt en stor svensk e-handlare',
	'Vidareutveckling av applikation som hjälper nyanlända etablera kontakter i Sverige',
];

const OurMissions = () => {
	return (
		<Section headerSpace style={{ backgroundColor: 'white', height: 'auto' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<H2>Våra uppdrag</H2>
				{/* 4 points here */}
				<P>Här är exempel på uppdrag vi utför:</P>
				<div className="flex flex-row mt-4">
					{devTexts.map((devText) => {
						return (
							<P className="px-1" key={devText}>
								{devText}
							</P>
						);
					})}
				</div>
			</div>
		</Section>
	);
};

export default OurMissions;
