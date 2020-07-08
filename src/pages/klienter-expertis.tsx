import React from 'react';
import {
	Competences,
	CreateValue,
	Hero,
	Services,
} from '../components/Clients';
import ClientCustomers from '../components/Clients/ClientCustomers';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';

const ClientsPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sections = [
		{
			index: 0,
			name: 'Klienter',
		},
		{
			index: 1,
			name: 'Värde för kund',
		},
		{
			index: 2,
			name: 'Tjänster',
		},
		{
			index: 3,
			name: 'Kompetenser',
		},
		{
			index: 4,
			name: 'Kunder',
		},
	];

	return (
		<Layout>
			<SEO title="Clients" />
			{scrollbarEnabled && <Scroller givenSections={sections} />}
			<Hero />
			<CreateValue />
			<Services />
			<Competences />
			<ClientCustomers />
		</Layout>
	);
};

export default ClientsPage;
