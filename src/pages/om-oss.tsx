import React from 'react';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';
import AllPeople from '../components/Employees/AllPeople';
import VideoPlayer from '../components/VideoPlayer';
import MakingDifference from '../components/About/MakingDifference';
import { EtimoVentures } from '../components/About/EtimoVentures';

const AboutUsPage = () => {
	const [height, width] = useViewportSize();
	const sectionHeightWithHeaderSpace = useSectionHeight(
		true,
		sizes().minimumHeight3xl
	);
	const sectionHeightWithoutHeaderSpace = useSectionHeight(false);
	const sectionLargeHeightWithoutHeaderSpace = useSectionHeight(
		false,
		sizes().minimumHeightXxl
	);

	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sections = [
		{
			index: 0,
			name: 'Kollegorna',
			height: (sectionHeightWithHeaderSpace ?? height) + sizes().headerHeight,
		},
		{
			index: 1,
			name: 'Våra värderingar',
			height: sectionHeightWithoutHeaderSpace ?? height,
		},
		{
			index: 2,
			name: 'Etimo Ventures',
			height: sectionLargeHeightWithoutHeaderSpace ?? height,
		},
		{
			index: 3,
			name: 'Skillnad',
			height: sectionHeightWithoutHeaderSpace ?? height,
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller sections={sections} />}
			<AllPeople sectionHeight={sectionHeightWithHeaderSpace ?? height} />
			<VideoPlayer sectionHeight={sectionHeightWithoutHeaderSpace ?? height} />
			<EtimoVentures
				sectionHeight={sectionLargeHeightWithoutHeaderSpace ?? height}
			/>
			<MakingDifference
				sectionHeight={sectionHeightWithoutHeaderSpace ?? height}
			/>
		</Layout>
	);
};

export function Head() {
	return <SEO title="Om oss" />;
}

export default AboutUsPage;
