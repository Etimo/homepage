import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';
import FloatUp from '../animations/FloatUp';
import AnimatedH2 from '../elements/AnimatedH2';
import Caption from '../elements/Caption';
import Span from '../elements/Span';
import EmployeeCards from './EmployeeCards';
import Section from './Section';

const ThePeople = () => {
	const data = useStaticQuery(graphql`
	{
		jassyr: file(relativePath: {eq: "jassyr.jpg"}) {
			childImageSharp {
				gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
			}
		}
		joakim: file(relativePath: {eq: "joakim.jpg"}) {
			childImageSharp {
				gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
			}
		}
		johan: file(relativePath: {eq: "johan.jpg"}) {
			childImageSharp {
				gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
			}
		}
		niclas: file(relativePath: {eq: "niclas.jpg"}) {
			childImageSharp {
				gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
			}
		}
		daniel: file(relativePath: {eq: "daniel.jpg"}) {
			childImageSharp {
				gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
			}
		}
		philip: file(relativePath: {eq: "philip.jpg"}) {
			childImageSharp {
				gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
			}
		}
	}
`);

	const people = [
		{
			name: 'Philip Forsberg',
			title: 'Konsult',
			image: <GatsbyImage image={data.philip.childImageSharp.gatsbyImageData} />,
			linkedin: 'https://www.linkedin.com/in/philip-forsberg-b815b6134/',
			github: 'https://github.com/ForsbergPhilip',
		},
		{
			name: 'Joakim Olesen',
			title: 'Grundare',
			image: <GatsbyImage image={data.joakim.childImageSharp.gatsbyImageData} />,
			linkedin: 'https://www.linkedin.com/in/joakim-olesen-a583181/',
			github: 'https://github.com/joakim-olesen',
		},
		{
			name: 'Daniel Winther',
			title: 'Partner',
			image: <GatsbyImage image={data.daniel.childImageSharp.gatsbyImageData} />,
			linkedin: 'https://www.linkedin.com/in/daniel-winther-a098751b/',
			github: 'https://github.com/indrif',
		},
		{
			name: 'Niclas Lindstedt',
			title: 'Konsult',
			image: <GatsbyImage image={data.niclas.childImageSharp.gatsbyImageData} />,
			linkedin: 'https://www.linkedin.com/in/niclaslindstedt/',
			github: 'https://github.com/niclaslindstedt',
		},
		{
			name: 'Johan Ahrens',
			title: 'Konsult',
			image: <GatsbyImage image={data.johan.childImageSharp.gatsbyImageData} />,
			linkedin: 'https://www.linkedin.com/in/johan-ahrens-b76647a/',
		},
		{
			name: 'Jassyr Bravo',
			title: 'Konsult',
			image: <GatsbyImage image={data.jassyr.childImageSharp.gatsbyImageData} />,
			linkedin: 'https://www.linkedin.com/in/jassyromar/',
			github: 'https://github.com/JassyrBravo',
		},
	];

	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-32 lg:h-full lg:overflow-hidden">
				<div className="flex flex-col mb-8 lg:h-95 lg:max-h-95 lg:justify-center lg:items-center">
					<FloatUp>
						<Caption className="text-center">Människorna</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Några av</AnimatedH2>
						<AnimatedH2 direction="right">
							<Span secondary>&nbsp;oss</Span>
						</AnimatedH2>
					</div>
					<EmployeeCards employees={people} />
				</div>
			</div>
		</Section>
	);
};

export default ThePeople;
