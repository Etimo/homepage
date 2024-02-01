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
	return (
		<Layout>
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
