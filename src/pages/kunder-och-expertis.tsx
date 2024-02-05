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
import { useViewportSize } from '../hooks';
import { OurServices } from '../components/Clients/OurServices';

const ClientsPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sections = [
		{
			index: 0,
			name: 'Våra tjänster',
		},
		{
			index: 1,
			name: 'Våra kunder',
		},
		{
			index: 2,
			name: 'Värde för kund',
		},
		{
			index: 3,
			name: 'Kompetenser',
		},
		{
			index: 4,
			name: 'Nöjda kunder',
		},
		{
			index: 5,
			name: 'Referenscase',
		},
		{
			index: 6,
			name: 'Kontakt',
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller givenSections={sections} />}
			<OurServices />
			<ClientCustomers />
			<CreateValue />
			<Competences />
			<Services />
			<ReferenceCase />
			<Apply variantKey="customers" />
		</Layout>
	);
};

export function Head() {
	return <SEO title="Kunder och expertis" />;
}

export default ClientsPage;
