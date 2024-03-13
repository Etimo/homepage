import React from 'react';
import { Apply } from '../components/Career';
import { Competences, CreateValue, ReferenceCase } from '../components/Clients';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';
import { OurServicesSection } from '../components/OurServices/OurServicesSection';

const ServicesPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sectionWithHeaderHeight = useSectionHeight(
		true,
		sizes().minimumHeightLarge
	);
	const sectionWithoutHeaderHeight = useSectionHeight(false);

	const sections = [
		{
			index: 0,
			name: 'Erbjudande',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
		{
			index: 1,
			name: 'Värde för kund',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 2,
			name: 'Kompetenser',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 3,
			name: 'Referenscase',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 4,
			name: 'Kontakt',
			height: sectionWithoutHeaderHeight ?? height,
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller sections={sections} />}
			<OurServicesSection sectionHeight={sectionWithHeaderHeight ?? height} />
			<CreateValue sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<Competences sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<ReferenceCase sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<Apply
				variantKey="customers"
				sectionHeight={sectionWithoutHeaderHeight ?? height}
			/>
		</Layout>
	);
};

export function Head() {
	return <SEO title="Våra tjänster" />;
}

export default ServicesPage;
