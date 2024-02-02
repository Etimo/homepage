import React from 'react';
import { Apply, IntroText, WhoAreYou, WorkingHere } from '../components/Career';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import About from '../components/About';
import FunAtWork from '../components/FunAtWork';

const CareerPage = () => {
	return (
		<Layout>
			<About />
			<FunAtWork />
			<WorkingHere />
			<WhoAreYou />
			<Apply variantKey="default" backgroundColor="white" />
		</Layout>
	);
};

export function Head() {
	return <SEO title="Karriär" />;
}

export default CareerPage;
