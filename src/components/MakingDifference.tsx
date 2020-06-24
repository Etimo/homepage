import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Caption from '../elements/Caption';
import DashedP from '../elements/DashedP';
import H2 from '../elements/H2';
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

const H3Title = styled.h3`
	${tw`font-quest text-xl lg:text-2xl mb-4`};
`;

export default () => {
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8">
					<Caption className="text-center">Skillnad</Caption>
					<H2 className="text-center">
						Etimo gör <span className="text-cyan">skillnad</span>
					</H2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-8 lg:mt-12 mx-6">
						<div className="flex flex-col border p-10">
							<H3Title>För kunden</H3Title>
							{customerTexts.map((cText) => {
								return <DashedP key={cText}>{cText}</DashedP>;
							})}
						</div>

						<div className="flex flex-col border p-10">
							<H3Title>För samhället</H3Title>
							{societyTexts.map((sText) => {
								return <DashedP key={sText}>{sText}</DashedP>;
							})}
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
