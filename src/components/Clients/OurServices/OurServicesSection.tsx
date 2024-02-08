import React from 'react';
import Section from '../../Section';
import { OurServices } from './OurServices';

type OurServicesProps = {
	sectionHeight: number;
};

export const OurServicesSection = (props: OurServicesProps) => {
	const { sectionHeight } = props;

	return (
		<Section sectionHeight={sectionHeight}>
			<div className="container mx-auto xl:px-32">
				<OurServices />
			</div>
		</Section>
	);
};
