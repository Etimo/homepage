import React from 'react';
import { H2, Span } from '../../elements';
import Section from '../Section';

const Competences = () => {
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center overflow-hidden">
				<H2>
					Exempel på våra <Span secondary>kompetenser</Span>
				</H2>
			</div>
		</Section>
	);
};

export default Competences;
