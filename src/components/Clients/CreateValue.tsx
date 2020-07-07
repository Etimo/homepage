import React from 'react';
import { H2, Span } from '../../elements';
import Section from '../Section';

const CreateValue = () => {
	return (
		<Section style={{ background: 'white' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center overflow-hidden">
				<H2>
					Vi skapar <Span secondary>värde</Span>
				</H2>
			</div>
		</Section>
	);
};

export default CreateValue;
