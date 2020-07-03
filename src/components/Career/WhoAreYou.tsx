import React from 'react';
import { H2, P } from '../../elements';
import Section from '../Section';

const WhoAreYou = () => {
	return (
		<Section headerSpace style={{ height: 'auto' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<H2>Är du vår nästa kollega? </H2>
				<P>
					Har du ett genuint intresse för utveckling och programmering? Vill du
					vara med på resan att bygga upp Sveriges ledande
					utvecklingsorganisation, så har du hittat rätt! Vi söker vår nästa
					kollega som vill vara med och växa med oss och bidra till vår
					organisation där din personlighet och drivkraft är viktiga komponenter
					- resten kan man lära sig på vägen! Du trivs hos oss om: Du har en
					stark vilja att ständigt lära mer och utvecklas i din yrkesroll Du
					sätter teamets gemensamma prestation och gemensamt uppsatta mål främst
					Du inspireras av att verka i en platt hierarki med duktiga kollegor
					och tar stort eget ansvar Vem är du? Du är utvecklare på antingen
					junior och senior nivå, frontend eller backend Du kan visa på att du
					är duktig på programmering med ditt favoritspråk Du gar erfarenhet av
					att utveckla system på serversidan (tex. med C#, Java, Python eller
					Node.js) eller på klientsidan (tex. med React eller Angular) Du är
					ambitiös och vill skapa kundvärde, användarnytta för kunder och
					samhällsnytta Pratar flytande svenska och engelska
				</P>
			</div>
		</Section>
	);
};

export default WhoAreYou;
