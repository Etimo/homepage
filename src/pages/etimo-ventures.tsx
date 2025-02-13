import React from 'react';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';
import { EtimoVentures } from '../components/About/EtimoVentures';

const InvestmentStrategy = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop;

	const sectionWithHeaderHeight = useSectionHeight(true);
	const sectionWithoutHeaderHeight = useSectionHeight(false);

	const sections = [
		{
			index: 0,
			name: 'Om Etimo Ventures',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller sections={sections} />}
			<EtimoVentures sectionHeight={sectionWithoutHeaderHeight ?? height} />
		</Layout>
	);
};

export function Head() {
	return (
		<SEO
			title="Etimo Ventures"
			description="Vi erbjuder en kombination av kapital och modern teknisk kompetens för att stödja små växande mjukvaruföretag som delar vår vision: att skapa bättre mjukvara för en bättre värld."
		/>
	);
}

export default InvestmentStrategy;
