import React from 'react';
import About from '../components/About';
import Customers from '../components/Customers';
import { FunAtWork } from '../components/FunAtWork';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller/Scroller';
import SEO from '../components/Seo';
import ThePeople from '../components/Employees/ThePeople';
import WorkAtEtimo from '../components/WorkAtEtimo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';

const IndexPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sectionWithHeaderHeight = useSectionHeight(true);
	const sectionWithoutHeaderHeight = useSectionHeight(false);

	const sections = [
		{
			index: 0,
			name: 'Start',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
		{
			index: 1,
			name: 'Vår passion',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 2,
			name: 'Att jobba här',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 3,
			name: 'Några av oss',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 4,
			name: 'Våra kunder',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 5,
			name: 'Kul på jobbet',
			height: sectionWithoutHeaderHeight ?? height,
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller sections={sections} />}

			<Hero sectionHeight={sectionWithHeaderHeight ?? height} />

			<About sectionHeight={sectionWithoutHeaderHeight ?? height} />

			<WorkAtEtimo sectionHeight={sectionWithoutHeaderHeight ?? height} />

			<ThePeople sectionHeight={sectionWithoutHeaderHeight ?? height} />

			<Customers link sectionHeight={sectionWithoutHeaderHeight ?? height} />

			<FunAtWork sectionHeight={sectionWithoutHeaderHeight ?? height} />
		</Layout>
	);
};

export function Head() {
	return <SEO title="Hem" />;
}

export default IndexPage;
