import React from 'react';
import { H2, Span } from '../../elements';
import Section from '../Section';

const Services = () => {
	return (
		<Section>
			<div className="flex container flex-col px-8 lg:px-32 text-center overflow-hidden">
				<H2>
					Våra tjänster får <Span secondary>toppbetyg</Span>
				</H2>
			</div>
		</Section>
	);
};

export default Services;
