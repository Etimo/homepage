import React from 'react';
import About from '../components/About';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller/Scroller';
import WorkAtEtimo from '../components/WorkAtEtimo';
import ThePeople from '../components/ThePeople';
import Customers from '../components/Customers';
import MakingDifference from '../components/MakingDifference';
import { useViewportSize } from '../hooks';

const IndexPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= 1280; // Laptop++

	return (
		<Layout>
			{/* <SEO title="Home" /> */}
			{scrollbarEnabled && <Scroller />}

			<Hero />

			<About />

			<WorkAtEtimo />

			<ThePeople />

			<Customers />

			<MakingDifference />

			{/* <SplashOld /> */}
		</Layout>
	);
};

export default IndexPage;
