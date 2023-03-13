import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { AnimatedH2, Box, Caption, P, Span } from '../elements';
import { HighlightButton } from '../components/Button';
import { FloatUp } from '../animations';
import styled from 'styled-components';
import EmployeeCards from '../components/EmployeeCards';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import tw from 'twin.macro';
import VideoPlayer from '../components/VideoPlayer';

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
			therese: file(relativePath: { eq: "someofus/new-images/therese2.jpg" }) {
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
			axel: file(relativePath: { eq: "someofus/new-images/elmarsson.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			daniel: file(relativePath: { eq: "someofus/new-images/danielw.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			philip: file(relativePath: { eq: "someofus/new-images/phille.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			morgan: file(relativePath: { eq: "someofus/new-images/morgan.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			etimo: file(relativePath: { eq: "someofus/new-images/etimologo.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			niclas: file(relativePath: { eq: "someofus/new-images/niclas.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			johan: file(relativePath: { eq: "someofus/new-images/johan2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			lilleman: file(relativePath: { eq: "someofus/new-images/lilleman.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			andre: file(relativePath: { eq: "someofus/new-images/andre.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			jassyr: file(relativePath: { eq: "someofus/new-images/jassyr.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			klara: file(relativePath: { eq: "someofus/new-images/klara.jpg" }) {
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
			name: 'Therese',
			title: 'Försäljningschef',
			image: <StyledImg fluid={data.therese.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/therese-dahlstr%C3%B6m/',
		},
		{
			name: 'Philip',
			title: 'Konsult',
			image: <StyledImg fluid={data.philip.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/philip-forsberg-b815b6134/',
			github: 'https://github.com/ForsbergPhilip',
		},
		{
			name: 'Johan',
			title: 'VD',
			image: <StyledImg fluid={data.johan.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/johan-hazelius-910b281a/',
			github: 'https://github.com/JohanHazelius',
		},
		{
			name: 'Morgan',
			title: 'Konsult',
			image: <StyledImg fluid={data.morgan.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/morgan-cromell/',
			github: 'https://github.com/morgan-cromell',
		},
		{
			name: 'Jeanette',
			title: 'HR och sälj',
			image: <StyledImg fluid={data.jeanette.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/jeanettebritan/',
		},
		{
			name: 'André',
			title: 'Konsult',
			image: <StyledImg fluid={data.andre.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/andr%C3%A9-hansson-5b6418128/',
			github: 'https://github.com/H4zze',
		},
		{
			name: 'Erik',
			title: 'Partner',
			image: <StyledImg fluid={data.erik.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/erik-malm-1343662/',
			github: 'https://github.com/sirscratchalot',
		},
		{
			name: 'Rickard',
			title: 'Konsult',
			image: <StyledImg fluid={data.rickard.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/rickard-l%C3%B6fberg-25319639/',
			github: 'https://github.com/rickardlofberg',
		},
		{
			name: 'Axel',
			title: 'Konsult',
			image: <StyledImg fluid={data.axel.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/axel-elmarsson-453a93159/',
			github: 'https://github.com/elmaxe',
		},
		{
			name: 'Joakim',
			title: 'Grundare',
			image: <StyledImg fluid={data.joakim.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/joakim-olesen-a583181/',
			github: 'https://github.com/joakim-olesen',
		},
		{
			name: 'Niclas',
			title: 'Konsult',
			image: <StyledImg fluid={data.niclas.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/niclaslindstedt/',
			github: 'https://github.com/niclaslindstedt',
		},
		{
			name: 'Klara',
			title: 'Konsult',
			image: <StyledImg fluid={data.klara.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/klara-djurberg-889853127/',
			github: 'https://github.com/klaradj',
		},
		{
			name: 'Lilleman',
			title: 'Konsult',
			image: <StyledImg fluid={data.lilleman.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/lillem4n/',
			github: 'https://github.com/lille-etimo',
		},
		{
			name: 'Saga',
			title: 'Konsult',
			image: <StyledImg fluid={data.saga.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/sagaswahn/',
			github: 'https://github.com/hejsaga',
		},
		{
			name: 'Daniel',
			title: 'Partner',
			image: <StyledImg fluid={data.daniel.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/daniel-winther-a098751b/',
			github: 'https://github.com/indrif',
		},
		{
			name: 'Lukas',
			title: 'Konsult',
			image: <StyledImg fluid={data.lukas.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/lukas-lindqvist/',
			github: 'https://github.com/ljukas',
		},
		{
			name: 'Jassyr',
			title: 'Konsult',
			image: <StyledImg fluid={data.jassyr.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/in/jassyromar/',
			github: 'https://github.com/JassyrBravo',
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
			name: 'Etimo',
			title: 'Kanske du?',
			image: <StyledImg fluid={data.etimo.childImageSharp.fluid} />,
			linkedin: 'https://www.linkedin.com/company/5032461',
			github: 'https://github.com/etimo',
		},
	];

	return (
		<Layout>
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

					<VideoPlayer />

					<div className="mx-auto">
						<Box mb={100}>
							<HighlightButton>
								<Link to="/karriar">
									<P>Vill du utveckla med oss?</P>
								</Link>
							</HighlightButton>
						</Box>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default kollegorna;
