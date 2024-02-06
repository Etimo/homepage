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
	const sectionHeightWithHeaderSpace = useSectionHeight(
		true,
		sizes().minimumHeight * 4
	);
	const sectionHeightWithoutHeaderSpace = useSectionHeight(false);
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sections = [
		{
			index: 0,
			name: 'Kollegorna',
			height: (sectionHeightWithHeaderSpace ?? height) + sizes().headerHeight,
		},
		{
			index: 1,
			name: 'Video',
			height: sectionHeightWithoutHeaderSpace ?? height,
		},
		{
			index: 2,
			name: 'Social hållbarhet',
			height: sectionHeightWithoutHeaderSpace ?? height,
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller sections={sections} />}
			<AllPeople sectionHeight={sectionHeightWithHeaderSpace ?? height} />
			<VideoPlayer sectionHeight={sectionHeightWithoutHeaderSpace ?? height} />
			<MakingDifference
				sectionHeight={sectionHeightWithoutHeaderSpace ?? height}
			/>
		</Layout>
	);
};

export function Head() {
	return <SEO title="Karriär" />;
}

export default AboutUsPage;
