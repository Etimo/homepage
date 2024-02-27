import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller/Scroller';
import SEO from '../components/Seo';
import ThePeople from '../components/Employees/ThePeople';
import WorkAtEtimo from '../components/WorkAtEtimo';
import { sizes } from '../helpers';
import { useSectionHeight, useViewportSize } from '../hooks';
import { OurServicesSectionWithLink } from '../components/Clients/OurServices/OurServicesSectionWithLink';
import Customers from '../components/Customers';

const IndexPage = () => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++

	const sectionWithHeaderHeight = useSectionHeight(true);
	const sectionWithoutHeaderHeight = useSectionHeight(false);
	const sectionWithoutHeaderHeightLarge = useSectionHeight(
		false,
		sizes().minimumHeightLarge
	);

	const sections = [
		{
			index: 0,
			name: 'Start',
			height: (sectionWithHeaderHeight ?? height) + sizes().headerHeight,
		},
		{
			index: 1,
			name: 'Våra tjänster',
			height: sectionWithoutHeaderHeightLarge ?? height,
		},
		{
			index: 2,
			name: 'Våra kunder',
			height: sectionWithoutHeaderHeightLarge ?? height,
		},
		{
			index: 3,
			name: 'Om oss',
			height: sectionWithoutHeaderHeight ?? height,
		},
		{
			index: 4,
			name: 'Karriär',
			height: sectionWithoutHeaderHeight ?? height,
		},
	];

	return (
		<Layout>
			{scrollbarEnabled && <Scroller sections={sections} />}

			<Hero sectionHeight={sectionWithHeaderHeight ?? height} />

			<OurServicesSectionWithLink
				sectionHeight={sectionWithoutHeaderHeightLarge ?? height}
			/>

			<Customers link sectionHeight={sectionWithoutHeaderHeight ?? height} />

			<ThePeople sectionHeight={sectionWithoutHeaderHeight ?? height} />

			<WorkAtEtimo sectionHeight={sectionWithoutHeaderHeight ?? height} />
		</Layout>
	);
};

export function Head() {
	return <SEO title="Hem" />;
}

export default IndexPage;
