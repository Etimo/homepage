import React from 'react';
import { H1 } from '../../elements';
import Section from '../Section';

const Hero = () => {
	return (
		<Section headerSpace>
			<div className="flex container flex-col px-8 lg:px-32 text-center overflow-hidden">
				<H1 className="uppercase text-cyan">Klienter</H1>
			</div>
		</Section>
	);
};

export default Hero;
