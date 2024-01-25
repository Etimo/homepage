import React from 'react';
import About from '../components/About';
import Customers from '../components/Customers';
import FunAtWork from '../components/FunAtWork';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import MakingDifference from '../components/MakingDifference';
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

			<About />

			<WorkAtEtimo />

			<ThePeople />

			<Customers link />

			<FunAtWork />

			<MakingDifference />
		</Layout>
	);
};

export function Head() {
	return <SEO title="Hem" />;
}

export default IndexPage;
