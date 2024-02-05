import React from 'react';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';
import AllPeople from '../components/Employees/AllPeople';
import VideoPlayer from '../components/VideoPlayer';
import MakingDifference from '../components/MakingDifference';

const AboutUsPage = () => {
	const [height, width] = useViewportSize();
	const sectionHeightWithHeaderSpace = useSectionHeight(true);
	const sectionHeightWithoutHeaderSpace = useSectionHeight(false);
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sections = [
		{
			index: 0,
			name: 'Kollegorna',
			height: sectionHeightWithHeaderSpace ?? height,
		},
		{
			index: 1,
			name: 'Video',
			height: sectionHeightWithHeaderSpace ?? height,
		},
		{
			index: 2,
			name: 'Social hållbarhet',
			height: sectionHeightWithHeaderSpace ?? height,
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
