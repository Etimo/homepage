import React from 'react';
import Section from './Section';

export default () => {
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8">
					<h4 className="mx-auto uppercase font-sans tracking-widest">
						Skillnad
					</h4>
					<h2 className="mx-auto font-sans text-5xl text-center">
						Etimo gör <span className="text-cyan">skillnad</span>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mt-8 mx-6">
						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För kunden</h3>
							<p className="text-gray-600 tracking-wider leading-loose">
								- Ständigt fokus på att leverera kundvärd <br />
								- Bidrar med teknisk kompetens samt sprider den <br />
								- Påverkar och förbättrar proaktivt som ansvarstagande
								lagspelare <br />
							</p>
						</div>

						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För samhället</h3>
							<p className="text-gray-600 tracking-wider leading-loose">
								- Jobbar pro-bono åt goda organisationer <br />
								- Skänker en del av vinster till välgörenhet <br />
								- Open Source-projekt som gör samhällsnytta <br />
								- Väljer bort uppdrag som inte gör samhällsnytta <br />
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
