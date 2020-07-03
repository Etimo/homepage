import React from 'react';
import { H2, P } from '../../elements';
import Section from '../Section';

const OurMissions = () => {
	return (
		<Section headerSpace style={{ backgroundColor: 'white', height: 'auto' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<H2>Våra uppdrag</H2>
				<P>Här är exempel på uppdrag vi utför:</P>
			</div>
		</Section>
	);
};

export default OurMissions;
