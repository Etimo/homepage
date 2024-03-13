import React from 'react';
import Section from '../Section';
import { HighlightButton } from '../Button';
import { Link } from 'gatsby';
import { FloatUp } from '../../animations';
import { AnimatedH2, Caption, Span } from '../../elements';
import { OurServicesInImages } from './OurServicesInImages';

type OurServicesProps = {
	sectionHeight: number;
};

export const OurServicesSectionWithLink = (props: OurServicesProps) => {
	const { sectionHeight } = props;

	return (
		<Section sectionHeight={sectionHeight} style={{ background: 'white' }}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8 overflow-hidden">
					<FloatUp>
						<Caption className="text-center">Våra tjänster</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Etimo </AnimatedH2>
						<AnimatedH2 direction="right">
							<Span>&nbsp;erbjuder</Span>
						</AnimatedH2>
					</div>
					<OurServicesInImages />
					<div className="flex mx-auto mt-6 md:mt-10 lg:mt-12 xl:mt-20">
						<HighlightButton className="mt-8 mx-auto overflow-hidden">
							<Link to="/tjanster">Mer om våra tjänster</Link>
						</HighlightButton>
					</div>
				</div>
			</div>
		</Section>
	);
};
