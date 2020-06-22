import React from 'react';
import Section from './Section';
import P from '../elements/P';
import Caption from '../elements/Caption';
import styled from 'styled-components';

const Dashedli = styled.li`
	::before {
		content: '-';
		position: absolute;
		margin-left: -10px;
		margin-top: 1px;
	}
`;

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
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mt-8 mx-6">
						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För kunden</h3>
							<ul className="text-gray-600 tracking-wider leading-loose">
								{customerTexts.map((cText) => {
									return (
										<Dashedli key={cText}>
											<P>{cText}</P>
										</Dashedli>
									);
								})}
							</ul>
						</div>

						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För samhället</h3>
							<ul className="text-gray-600 tracking-wider leading-loose">
								{societyTexts.map((sText) => {
									return (
										<Dashedli key={sText}>
											<P>{sText}</P>
										</Dashedli>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
