import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Splash from '../components/Splash';
import Content from '../components/content';
import Scroller from '../components/Scroller/Scroller';

const IndexPage = () => {
	return (
		<Layout>
			<Seo title="Home" />
			<Scroller />

			<Splash />

			{/* <SplashOld /> */}

			<Content />
		</Layout>
	);
};

export default IndexPage;
