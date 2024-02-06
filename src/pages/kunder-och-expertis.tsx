import React from 'react';
import { Apply } from '../components/Career';
import {
	Competences,
	CreateValue,
	Hero,
	Services,
	ReferenceCase,
} from '../components/Clients';
import ClientCustomers from '../components/Clients/ClientCustomers';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';

const ClientsPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sectionWithHeaderHeight = useSectionHeight(true);
	const sectionWithoutHeaderHeight = useSectionHeight(false);

	const sections = [
		{
			index: 0,
			name: 'Kunder',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
		{
			index: 1,
			name: 'Våra kunder',
			height: sectionWithoutHeaderHeight ?? height,
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
			name: 'Tjänster',
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
			<Hero sectionHeight={sectionWithHeaderHeight ?? height} />
			<ClientCustomers sectionHeight={sectionWithoutHeaderHeight ?? height} />
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
