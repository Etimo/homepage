import React from 'react';
import { H2, P } from '../../elements';
import Section from '../Section';

const WorkingHere = () => {
	return (
		<Section headerSpace style={{ backgroundColor: 'white', height: 'auto' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<H2>Som konsult hos oss</H2>
				<P>Bullet list av fördelar</P>
			</div>
		</Section>
	);
};

export default WorkingHere;
