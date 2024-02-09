import React from 'react';
import Section from '../../Section';
import { OurServices } from './OurServices';
import { FloatUp } from '../../../animations';
import { AnimatedH2, Caption, Span } from '../../../elements';

type OurServicesProps = {
	sectionHeight: number;
};

export const OurServicesSection = (props: OurServicesProps) => {
	const { sectionHeight } = props;

	return (
		<Section sectionHeight={sectionHeight}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8 overflow-hidden">
					<FloatUp>
						<Caption className="text-center">Erbjudande</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Etimo </AnimatedH2>
						<AnimatedH2 direction="right">
							<Span>&nbsp;erbjuder</Span>
						</AnimatedH2>
					</div>
					<OurServices />
				</div>
			</div>
		</Section>
	);
};
