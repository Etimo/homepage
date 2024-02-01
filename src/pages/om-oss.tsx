import React from 'react';
import { Apply, IntroText, WhoAreYou, WorkingHere } from '../components/Career';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import AllPeople from '../components/Employees/AllPeople';
import VideoPlayer from '../components/VideoPlayer';
import MakingDifference from '../components/MakingDifference';

const AboutUsPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sections = [
		{
			index: 0,
			name: 'Kollegorna',
		},
		{
			index: 1,
			name: 'Video',
		},
		{
			index: 2,
			name: 'Social hållbarhet',
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller givenSections={sections} />}
			<AllPeople />
			<VideoPlayer />
			<MakingDifference />
		</Layout>
	);
};

export function Head() {
	return <SEO title="Karriär" />;
}

export default AboutUsPage;
