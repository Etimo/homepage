import React from 'react';
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
import { useViewportSize } from '../hooks';

const ClientsPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sections = [
		{
			index: 0,
			name: 'Kunder',
		},
		{
			index: 1,
			name: 'Värde för kund',
		},
		{
			index: 2,
			name: 'Kompetenser',
		},
		{
			index: 3,
			name: 'Tjänster',
		},
		{
			index: 4,
			name: 'Referenscase',
		},
		{
			index: 6,
			name: 'Våra kunder',
		},
	];

	return (
		<Layout>
			<SEO title="Kunder och expertis" />
			{scrollbarEnabled && <Scroller givenSections={sections} />}
			<Hero />
			<CreateValue />
			<Competences />
			<Services />
			<ReferenceCase />
			<ClientCustomers />
		</Layout>
	);
};

export default ClientsPage;
