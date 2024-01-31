import React from 'react';
import { Apply, IntroText, WhoAreYou, WorkingHere } from '../components/Career';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import About from '../components/About';
import FunAtWork from '../components/FunAtWork';

const CareerPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sections = [
		{
			index: 0,
			name: 'Karriär',
		},
		{
			index: 1,
			name: 'Vår passion',
		},
		{
			index: 2,
			name: 'Kul på jobbet',
		},
		{
			index: 3,
			name: 'Jobbet',
		},
		{
			index: 4,
			name: 'Du',
		},
		{
			index: 5,
			name: 'Ansök',
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller givenSections={sections} />}
			<IntroText />
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
