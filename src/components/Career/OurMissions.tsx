import React from 'react';
import { H2, P } from '../../elements';
import Section from '../Section';

const OurMissions = () => {
	return (
		<Section headerSpace style={{ backgroundColor: 'white', height: 'auto' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<H2>Våra uppdrag</H2>
				{/* 4 points here */}
				<P>
					Här är exempel på uppdrag vi utför: Nyutveckling av webbaserad
					betalningslösning åt en ledande aktör inom e-handelsbetalning
					Nyutveckling av automatisk testsvit för en digital konsumenttjänst
					Nyutveckling av webbapplikation för automatiserad rådgivning åt en
					stor svensk bank. Applikationen är en integrerad del av internetbanken
					Nyutveckling av lösning som identifierar kontokortsbedrägerier åt en
					stor svensk e-handlare Vidareutveckling av applikation som hjälper
					nyanlända etablera kontakter i Sverige
				</P>
			</div>
		</Section>
	);
};

export default OurMissions;
