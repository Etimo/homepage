import React from 'react';
import { Caption, H2, P, Span } from '../../elements';
import Section from '../Section';

const Apply = () => {
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<Caption>Bli en i gänget</Caption>
				<H2>Ansök här</H2>
				<P>Vill du jobba hos oss?</P>
				<P>
					Skicka ett mail till oss på{' '}
					<Span secondary>
						<a href="mailto:kontakt@etimo.se" target="_blank">
							kontakt@etimo.se
						</a>
					</Span>
				</P>
			</div>
		</Section>
	);
};

export default Apply;
