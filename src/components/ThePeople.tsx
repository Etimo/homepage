import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import EmployeeCards from './EmployeeCards';
import Section from './Section';

const ThePeople = () => {
	const data = useStaticQuery(graphql`
		query {
			jassyr: file(relativePath: { eq: "jassyr.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			joakim: file(relativePath: { eq: "joakim.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			johan: file(relativePath: { eq: "johan.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			niclas: file(relativePath: { eq: "niclas.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			daniel: file(relativePath: { eq: "daniel.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			philip: file(relativePath: { eq: "philip.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const people = [
		{
			name: 'Philip Forsberg',
			title: 'Konsult',
			image: <Img fluid={data.philip.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/philip-forsberg-b815b6134/',
			github: 'https://github.com/ForsbergPhilip',
		},
		{
			name: 'Joakim Olesen',
			title: 'Grundare',
			image: <Img fluid={data.joakim.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/joakim-olesen-a583181/',
			github: 'https://github.com/joakim-olesen',
		},
		{
			name: 'Daniel Winther',
			title: 'Partner',
			image: <Img fluid={data.daniel.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/daniel-winther-a098751b/',
			github: 'https://github.com/indrif',
		},
		{
			name: 'Niclas Lindstedt',
			title: 'Konsult',
			image: <Img fluid={data.niclas.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/niclaslindstedt/',
			github: 'https://github.com/niclaslindstedt',
		},
		{
			name: 'Johan Ahrens',
			title: 'Konsult',
			image: <Img fluid={data.johan.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/johan-ahrens-b76647a/',
		},
		{
			name: 'Jassyr Bravo',
			title: 'Konsult',
			image: <Img fluid={data.jassyr.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/jassyromar/',
			github: 'https://github.com/JassyrBravo',
		},
	];

	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-32 lg:h-full lg:overflow-hidden">
				<div className="flex flex-col mb-8 lg:h-95 lg:max-h-95 lg:justify-center lg:items-center">
					<Caption className="text-center">Människorna</Caption>
					<H2 className="text-center lg:pb-2">
						Några av <span className="text-cyan">oss</span>
					</H2>
					<EmployeeCards employees={people} />
				</div>
			</div>
		</Section>
	);
};

export default ThePeople;
