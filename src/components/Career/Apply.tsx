import React from 'react';
import { H2, P } from '../../elements';
import Section from '../Section';

const Apply = () => {
	return (
		<Section headerSpace style={{ height: 'auto' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<H2>Ansök här</H2>
				<P>Här kan du ansöka om att jobba på Etimo</P>
			</div>
		</Section>
	);
};

export default Apply;
