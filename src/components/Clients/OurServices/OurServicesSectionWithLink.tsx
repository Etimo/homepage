import React from 'react';
import Section from '../../Section';
import { OurServices } from './OurServices';
import { HighlightButton } from '../../Button';
import { Link } from 'gatsby';

type OurServicesProps = {
	sectionHeight: number;
};

export const OurServicesSectionWithLink = (props: OurServicesProps) => {
	const { sectionHeight } = props;

	return (
		<Section sectionHeight={sectionHeight} style={{ background: 'white' }}>
			<div className="container mx-auto xl:px-32">
				<OurServices />
				<div className="flex mx-auto mt-6 md:mt-10 lg:mt-12 xl:mt-20">
					<HighlightButton className="mt-8 mx-auto overflow-hidden">
						<Link to="/kunder-och-expertis">Mer om våra tjänster</Link>
					</HighlightButton>
				</div>
			</div>
		</Section>
	);
};
