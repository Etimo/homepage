import React from 'react';
import Caption from '../elements/Caption';
import DashedP from '../elements/DashedP';
import Section from './Section';

const customerTexts = [
	'Ständigt fokus på att leverera kundvärde',
	'Bidrar med teknisk kompetens och sprider den',
	'Påverkar och förbättrar proaktivt',
	'Är en ansvarstagande lagspelare',
];

const societyTexts = [
	'Jobbar pro-bono åt goda organisationer',
	'Skänker en del av vinsten till välgörenhet',
	'Open Source-projekt som gör samhällsnytta',
	'Väljer bort uppdrag som inte gör samhällsnytta',
];

export default () => {
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8">
					<Caption className="text-center">Skillnad</Caption>
					<h2 className="mx-auto font-sans text-5xl text-center">
						Etimo gör <span className="text-cyan">skillnad</span>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mt-8 lg:mt-12 mx-6">
						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För kunden</h3>
							<div className="text-gray-800 tracking-wider leading-loose">
								{customerTexts.map((cText) => {
									return <DashedP key={cText}>{cText}</DashedP>;
								})}
							</div>
						</div>

						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För samhället</h3>
							<div className="text-gray-900 tracking-wider leading-loose">
								{societyTexts.map((sText) => {
									return <DashedP key={sText}>{sText}</DashedP>;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
