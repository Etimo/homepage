import React from 'react';
import { Apply, IntroText, WhoAreYou, WorkingHere } from '../components/Career';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';

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
			name: 'Jobbet',
		},
		{
			index: 2,
			name: 'Du',
		},
		{
			index: 3,
			name: 'Ansök',
		},
	];

	return (
		<Layout>
			<IntroText />
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
