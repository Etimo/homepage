import React from 'react';
import { Apply, WhoAreYou, WorkingHere } from '../components/Career';
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
			name: 'Jobbet',
		},
		{
			index: 1,
			name: 'Du',
		},
		{
			index: 2,
			name: 'Ansök',
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller givenSections={sections} />}
			<WorkingHere />
			<WhoAreYou />
			<Apply variantKey="default" />
		</Layout>
	);
};

export function Head() {
	return <SEO title="Karriär" />;
}

export default CareerPage;
