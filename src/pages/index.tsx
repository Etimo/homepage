import React from 'react';
import About from '../components/About';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller/Scroller';

const IndexPage = () => {
	return (
		<Layout>
			{/* <SEO title="Home" /> */}
			<Scroller />

			<Hero />

			<About />

			{/* <SplashOld /> */}

			<Content />
		</Layout>
	);
};

export default IndexPage;
