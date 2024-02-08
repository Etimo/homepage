import React from 'react';
import { Apply } from '../components/Career';
import {
	Competences,
	CreateValue,
	Services,
	ReferenceCase,
} from '../components/Clients';
import ClientCustomers from '../components/Clients/ClientCustomers';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';
import { OurServices } from '../components/Clients/OurServices';

const ClientsPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sectionWithHeaderHeight = useSectionHeight(
		true,
		sizes().minimumHeightLarge
	);
	const sectionWithoutHeaderHeight = useSectionHeight(false);
	const largeSectionHeight = useSectionHeight(false, sizes().minimumHeightXl);

	const sections = [
		{
			index: 0,
			name: 'Våra tjänster',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
		{
			index: 1,
			name: 'Våra kunder',
			height: largeSectionHeight ?? height,
		},
		{
			index: 2,
			name: 'Värde för kund',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 3,
			name: 'Kompetenser',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 4,
			name: 'Nöjda kunder',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 5,
			name: 'Referenscase',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 6,
			name: 'Kontakt',
			height: sectionWithoutHeaderHeight ?? height,
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller sections={sections} />}
			<OurServices sectionHeight={sectionWithHeaderHeight ?? height} />
			<ClientCustomers sectionHeight={largeSectionHeight ?? height} />
			<CreateValue sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<Competences sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<Services sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<ReferenceCase sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<Apply
				variantKey="customers"
				sectionHeight={sectionWithoutHeaderHeight ?? height}
			/>
		</Layout>
	);
};

export function Head() {
	return <SEO title="Kunder och expertis" />;
}

export default ClientsPage;
