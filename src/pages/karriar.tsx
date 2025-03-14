import React from 'react';
import { Apply, WhoAreYou, WorkingHere } from '../components/Career';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';
import About from '../components/About';
import { FunAtWork } from '../components/FunAtWork';

const CareerPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sectionWithHeaderHeight = useSectionHeight(true);
	const sectionWithoutHeaderHeight = useSectionHeight(false);

	const sections = [
		{
			index: 0,
			name: 'Vår passion',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
		{
			index: 1,
			name: 'Kul på jobbet',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
		{
			index: 2,
			name: 'Jobbet',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
		{
			index: 3,
			name: 'Du',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 4,
			name: 'Ansök',
			height: sectionWithoutHeaderHeight ?? height,
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller sections={sections} />}
			<About sectionHeight={sectionWithHeaderHeight ?? height} />
			<FunAtWork sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<WorkingHere sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<WhoAreYou sectionHeight={sectionWithoutHeaderHeight ?? height} />
			<Apply
				sectionHeight={sectionWithoutHeaderHeight ?? height}
				variantKey="default"
			/>
		</Layout>
	);
};

export const Head = () => {
	return (
		<SEO
			title="Karriär"
			description="Vår största tillgång är du, och vi ser till att du har ett meningsfullt och utvecklande uppdrag där du trivs."
		/>
	);
};

export default CareerPage;
