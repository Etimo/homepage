import React from 'react';
import {
	Apply,
	IntroText,
	OurMissions,
	WhoAreYou,
	WorkingHere,
} from '../components/Career';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';

const CareerPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	return (
		<Layout>
			<SEO title="Career" />
			<IntroText />
			<WorkingHere />
			<WhoAreYou />
			<OurMissions />
			<Apply />
		</Layout>
	);
};

export default CareerPage;
