import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { AnimatedH2, Caption, P, Span } from '../elements';
import { HighlightButton } from '../components/Button';
import { FloatUp } from '../animations';
import styled from 'styled-components';
import EmployeeCards from '../components/EmployeeCards';
import Section from '../components/Section';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import tw from 'twin.macro';

const StyledImg = styled(Img)`
	${tw`max-w-sm h-full`};
`;

const kollegorna = () => {
	const data = useStaticQuery(graphql`
		query {
			henrik: file(relativePath: { eq: "someofus/new-images/henrik.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			bjorn: file(relativePath: { eq: "someofus/new-images/bjorn.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			alfred: file(relativePath: { eq: "someofus/new-images/affe.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			jeanette: file(relativePath: { eq: "someofus/new-images/jeanette.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			lukas: file(relativePath: { eq: "someofus/new-images/lukas.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			rickard: file(relativePath: { eq: "someofus/new-images/rickard.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			saga: file(relativePath: { eq: "someofus/new-images/saga.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			joakim: file(relativePath: { eq: "someofus/new-images/joakim.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			erik: file(relativePath: { eq: "someofus/new-images/erik.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			axel: file(relativePath: { eq: "someofus/new-images/axel.jpeg" }) {
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
			name: 'Björn',
			title: 'Konsult',
			image: <StyledImg fluid={data.bjorn.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/bj%C3%B6rn-wahlberg-68b59020/',
			github: 'https://github.com/bjornkonrad',
		},
		{
			name: 'Alfred',
			title: 'Konsult',
			image: <StyledImg fluid={data.alfred.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/alfred-stenborg-20700b135/',
			github: 'https://github.com/affeproffs',
		},
		{
			name: 'Jeanette',
			title: 'HR och sälj',
			image: <StyledImg fluid={data.jeanette.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/jeanettebritan/',
		},
		{
			name: 'Rickard',
			title: 'Konsult',
			image: <StyledImg fluid={data.rickard.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/rickard-l%C3%B6fberg-25319639/',
			github: 'https://github.com/rickardlofberg',
		},
		{
			name: 'Henrik',
			title: 'Konsult',
			image: <StyledImg fluid={data.henrik.childImageSharp.fluid} />,
			linkedin:
				'https://www.linkedin.com/in/henrik-west%C3%B6%C3%B6-66150419a/',
			github: 'https://github.com/henrik-westoo',
		},
		{
			name: 'Saga',
			title: 'Konsult',
			image: <StyledImg fluid={data.saga.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/sagaswahn/',
			github: 'https://github.com/hejsaga',
		},
		{
			name: 'Joakim',
			title: 'Grundare',
			image: <StyledImg fluid={data.joakim.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/joakim-olesen-a583181/',
			github: 'https://github.com/joakim-olesen',
		},
		{
			name: 'Lukas',
			title: 'Konsult',
			image: <StyledImg fluid={data.lukas.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/lukas-lindqvist/',
			github: 'https://github.com/ljukas',
		},
		{
			name: 'Erik',
			title: 'Partner',
			image: <StyledImg fluid={data.erik.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/erik-malm-1343662/',
			github: 'https://github.com/sirscratchalot',
		},
		{
			name: 'Axel',
			title: 'Konsult',
			image: <StyledImg fluid={data.axel.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/axel-elmarsson-453a93159/',
			github: 'https://github.com/elmaxe',
		},
	];

	return (
		<Layout>
			<Section style={{ backgroundColor: 'white' }}>
				<div className="container mx-auto xl:px-12 lg:h-full lg:overflow-hidden">
					<div className="flex flex-col mb-8 lg:h-95 lg:max-h-95 lg:justify-center lg:items-center">
						<FloatUp>
							<Caption className="text-center">Människorna</Caption>
						</FloatUp>
						<div className="flex flex-row justify-center">
							<AnimatedH2 direction="left">Vi är</AnimatedH2>
							<AnimatedH2 direction="right">
								<Span secondary>&nbsp;Etimo</Span>
							</AnimatedH2>
						</div>
						<EmployeeCards employees={people} employeePage={true} />

						<HighlightButton className="mt-3">
							<Link to="/karriar">
								<P>Vill du utveckla med oss?</P>
							</Link>
						</HighlightButton>
					</div>
				</div>
			</Section>
		</Layout>
	);
};

export default kollegorna;
