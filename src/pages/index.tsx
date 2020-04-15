import React from 'react';
import { useTheme } from 'styled-components';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller/Scroller';
import { Container } from '../elements';

const IndexPage = () => {
	return (
		<Layout>
			{/* <SEO title="Home" /> */}
			<Scroller />

			<Hero />

			{/* <SplashOld /> */}

			<Content />
		</Layout>
	);
};

export default IndexPage;
