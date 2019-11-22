import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Splash from '../components/Splash';
import Content from '../components/content';
import Scroller from '../components/Scroller/Scroller';
import FloatingActionButton from '../elements/FloatingActionButton';

const IndexPage = () => {
	return (
		<Layout>
			<Seo title="Home" />
			<Scroller />
			<FloatingActionButton></FloatingActionButton>

			<Splash />

			{/* <SplashOld /> */}

			<Content />
		</Layout>
	);
};

export default IndexPage;
