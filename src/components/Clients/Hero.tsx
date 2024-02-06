import React from 'react';
import { FloatUp } from '../../animations';
import { H1, P } from '../../elements';
import Section from '../Section';

type HeroProps = {
	sectionHeight: number;
};

const Hero = (props: HeroProps) => {
	const { sectionHeight } = props;
	return (
		<Section sectionHeight={sectionHeight}>
			<div className="flex container flex-col px-8 xl:px-32 text-center overflow-hidden h-25r lg:h-auto justify-center">
				<FloatUp>
					<H1 className="uppercase text-cyan">Kunder</H1>
					<P className="w-4/5 md:w-3/5 mx-auto">
						Vi hjälper ledande organisationer inom bl.a. media, finans,
						e-handel, utbildning och kollektivtrafik att lösa affärskritiska
						problem genom att utveckla skräddarsydda digitala lösningar
					</P>
				</FloatUp>
			</div>
		</Section>
	);
};

export default Hero;
