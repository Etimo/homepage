import React from 'react';
import Section from './Section';
import EmployeeCards from './EmployeeCards';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
		}
	`);

	const people = [
		{
			name: 'Jassyr Bravo',
			title: 'Konsult',
			image: <Img fluid={data.jassyr.childImageSharp.fluid} />,
		},
		{
			name: 'Joakim Olesen',
			title: 'Grundare',
			image: <Img fluid={data.joakim.childImageSharp.fluid} />,
		},
		{
			name: 'Johan Ahrens',
			title: 'Konsult',
			image: <Img fluid={data.johan.childImageSharp.fluid} />,
		},
	];

	return (
		<Section>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8">
					<h4 className="mx-auto uppercase font-sans tracking-widest">
						Människorna
					</h4>
					<h2 className="mx-auto font-sans text-5xl">
						Några av <span className="text-cyan">oss</span>
					</h2>
					{/* <Row alignItems="center" justifyContent="center" flexDirection="column">
					<Col>
					<Caption textAlign="center" style={{ width: '100%' }}>
					Människorna
					</Caption>
					</Col>
					<Col>
					<EmphasizedH2 style={{ textAlign: 'center' }}>
					Några av <Span secondary>oss</Span>
					</EmphasizedH2>
					</Col>
				</Row> */}
					<EmployeeCards employees={people} />
				</div>
			</div>
		</Section>
	);
};

export default ThePeople;
