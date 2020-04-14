import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Splash from '../components/Splash';
import Content from '../components/Content';
import Scroller from '../components/Scroller/Scroller';

const IndexPage = () => {
	return (
		<Layout>
			{/* <SEO title="Home" /> */}
			<Scroller />

			<Splash />

			{/* <SplashOld /> */}

			<Content />
		</Layout>
	);
};

export default IndexPage;
