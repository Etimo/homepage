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
import SEO from '../components/Seo';

const ClientsPage = () => {
	return (
		<Layout>
			<Hero />
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
