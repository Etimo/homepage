import React from 'react';
import Section from './Section';
import P from '../elements/P';
import Caption from '../elements/Caption';

export default () => {
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8">
					<Caption className="text-center">Skillnad</Caption>
					<h2 className="mx-auto font-sans text-5xl text-center">
						Etimo gör <span className="text-cyan">skillnad</span>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mt-8 mx-6">
						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För kunden</h3>
							<P className="text-gray-600 tracking-wider leading-loose">
								- Ständigt fokus på att leverera kundvärde <br />
								- Bidrar med teknisk kompetens och sprider den <br />
								- Påverkar och förbättrar proaktivt <br />
								- Är en ansvarstagande lagspelare <br />
							</P>
						</div>

						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För samhället</h3>
							<P className="text-gray-600 tracking-wider leading-loose">
								- Jobbar pro-bono åt goda organisationer <br />
								- Skänker en del av vinsten till välgörenhet <br />
								- Open Source-projekt som gör samhällsnytta <br />
								- Väljer bort uppdrag som inte gör samhällsnytta <br />
							</P>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
