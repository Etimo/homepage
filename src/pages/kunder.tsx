import React from 'react';
import { Apply } from '../components/Career';
import ClientCustomers from '../components/Clients/ClientCustomers';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';
import HappyClients from '../components/Clients/Services';

const ClientsPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sectionWithHeaderHeight = useSectionHeight(
		true,
		sizes().minimumHeightXl
	);
	const sectionWithoutHeaderHeight = useSectionHeight(false);

	const sections = [
		{
			index: 0,
			name: 'Våra kunder',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
		{
			index: 1,
			name: 'Nöjda kunder',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 2,
			name: 'Kontakt',
			height: sectionWithoutHeaderHeight ?? height,
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller sections={sections} />}
			<ClientCustomers sectionHeight={sectionWithHeaderHeight ?? height} />
			<HappyClients sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<Apply
				variantKey="customers"
				sectionHeight={sectionWithoutHeaderHeight ?? height}
			/>
		</Layout>
	);
};

export function Head() {
	return <SEO title="Våra kunder" />;
}

export default ClientsPage;
