import React from 'react';
import { H2, P } from '../../elements';
import Section from '../Section';

const WhoAreYou = () => {
	return (
		<Section headerSpace style={{ height: 'auto' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<H2>Vem är du?</H2>
				<P>Förväntningar på dig:</P>
				<P>Du bör:</P>
			</div>
		</Section>
	);
};

export default WhoAreYou;
