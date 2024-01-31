import React from 'react';
import Customers from '../components/Customers';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller/Scroller';
import SEO from '../components/Seo';
import ThePeople from '../components/Employees/ThePeople';
import WorkAtEtimo from '../components/WorkAtEtimo';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';

const IndexPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	return (
		<Layout>
			{scrollbarEnabled && <Scroller />}

			<Hero />

			<Customers link />

			<ThePeople />

			<WorkAtEtimo />
		</Layout>
	);
};

export function Head() {
	return <SEO title="Hem" />;
}

export default IndexPage;
