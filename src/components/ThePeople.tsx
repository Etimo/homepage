import { graphql, Link, useStaticQuery } from 'gatsby';
import tw from 'twin.macro';
import styled from 'styled-components';
import Img from 'gatsby-image';
import React from 'react';
import FloatUp from '../animations/FloatUp';
import AnimatedH2 from '../elements/AnimatedH2';
import Caption from '../elements/Caption';
import Span from '../elements/Span';
import EmployeeCards from './EmployeeCards';
import Section from './Section';
import { HighlightButton } from './Button';
import { P } from '../elements';

const StyledImg = styled(Img)`
	${tw`max-w-sm h-full`};
`;

const ThePeople = () => {
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
	];

	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-12 lg:h-full lg:overflow-hidden">
				<div className="flex flex-col mb-8 lg:h-95 lg:max-h-95 lg:justify-center lg:items-center">
					<FloatUp>
						<Caption className="text-center">Människorna</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center h-24">
						<AnimatedH2 direction="left">Några av</AnimatedH2>
						<AnimatedH2 direction="right">
							<Span secondary>&nbsp;oss</Span>
						</AnimatedH2>
					</div>
					<EmployeeCards employees={people} />

					<HighlightButton className="mt-8 mx-auto">
						<Link to="/kollegorna">
							<P>Möt hela Etimo</P>
						</Link>
					</HighlightButton>
				</div>
			</div>
		</Section>
	);
};

export default ThePeople;
