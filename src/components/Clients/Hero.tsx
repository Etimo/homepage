import React from 'react';
import { H1, P } from '../../elements';
import Section from '../Section';

const Hero = () => {
	return (
		<Section headerSpace>
			<div className="flex container flex-col px-8 xl:px-32 text-center overflow-hidden h-100 lg:h-auto justify-center">
				<H1 className="uppercase text-cyan">Klienter</H1>
				<P className="w-4/5 md:w-3/5 mx-auto">
					Vi hjälper ledande organisationer inom bl.a. media, finans, e-handel,
					utbildning och kollektivtrafik att lösa affärskritiska problem genom
					att utveckla skräddarsydda digitala lösningar
				</P>
			</div>
		</Section>
	);
};

export default Hero;
