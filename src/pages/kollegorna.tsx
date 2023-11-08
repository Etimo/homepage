import React from 'react';
import { Link } from 'gatsby';
import { AnimatedH2, Box, Caption, P, Span } from '../elements';
import { HighlightButton } from '../components/Button';
import { FloatUp } from '../animations';
import styled from 'styled-components';
import EmployeeCards from '../components/EmployeeCards';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import tw from 'twin.macro';
import VideoPlayer from '../components/VideoPlayer';
import { useProfileImages } from '../hooks/useProfileImages';

const StyledImg = styled(Img)`
	${tw`max-w-sm h-full`};
`;

const kollegorna = () => {
	const images = useProfileImages();

	const people = [
		{
			name: 'Björn',
			title: 'Konsult',
			image: <StyledImg fluid={images.bjorn} />,
			linkedin: 'https://www.linkedin.com/in/bj%C3%B6rn-wahlberg-68b59020/',
			github: 'https://github.com/bjornkonrad',
		},
		{
			name: 'Jeanette',
			title: 'VD',
			image: <StyledImg fluid={images.jeanette} />,
			linkedin: 'https://www.linkedin.com/in/jeanettebritan/',
		},

		{
			name: 'Erik',
			title: 'Partner',
			image: <StyledImg fluid={images.erik} />,
			linkedin: 'https://www.linkedin.com/in/erik-malm-1343662/',
			github: 'https://github.com/sirscratchalot',
		},
		{
			name: 'Joakim',
			title: 'Grundare',
			image: <StyledImg fluid={images.joakim} />,
			linkedin: 'https://www.linkedin.com/in/joakim-olesen-a583181/',
			github: 'https://github.com/joakim-olesen',
		},
		{
			name: 'Morgan',
			title: 'Konsult',
			image: <StyledImg fluid={images.morgan} />,
			linkedin: 'https://www.linkedin.com/in/morgan-cromell/',
			github: 'https://github.com/morgan-cromell',
		},
		{
			name: 'Malin W',
			title: 'Konsult',
			image: <StyledImg fluid={images.malinw} />,
			linkedin: 'https://www.linkedin.com/in/malin-wadholm/',
			github: 'https://github.com/wadholm',
		},
		{
			name: 'Johan',
			title: 'Medgrundare',
			image: <StyledImg fluid={images.johan} />,
			linkedin: 'https://www.linkedin.com/in/johan-hazelius-910b281a/',
			github: 'https://github.com/JohanHazelius',
		},
		{
			name: 'Lukas',
			title: 'Konsult',
			image: <StyledImg fluid={images.lukas} />,
			linkedin: 'https://www.linkedin.com/in/lukas-lindqvist/',
			github: 'https://github.com/ljukas',
		},
		{
			name: 'Philip',
			title: 'Konsult',
			image: <StyledImg fluid={images.philip} />,
			linkedin: 'https://www.linkedin.com/in/philip-forsberg-b815b6134/',
			github: 'https://github.com/ForsbergPhilip',
		},
		{
			name: 'André',
			title: 'Konsult',
			image: <StyledImg fluid={images.andre} />,
			linkedin: 'https://www.linkedin.com/in/andr%C3%A9-hansson-5b6418128/',
			github: 'https://github.com/H4zze',
		},
		{
			name: 'Klara',
			title: 'Konsult',
			image: <StyledImg fluid={images.klara} />,
			linkedin: 'https://www.linkedin.com/in/klara-djurberg-889853127/',
			github: 'https://github.com/klaradj',
		},
		{
			name: 'Henrik',
			title: 'Konsult',
			image: <StyledImg fluid={images.henrik} />,
			linkedin:
				'https://www.linkedin.com/in/henrik-west%C3%B6%C3%B6-66150419a/',
			github: 'https://github.com/henrik-westoo',
		},
		{
			name: 'Saga',
			title: 'Konsult',
			image: <StyledImg fluid={images.saga} />,
			linkedin: 'https://www.linkedin.com/in/sagaswahn/',
			github: 'https://github.com/hejsaga',
		},
		{
			name: 'Daniel',
			title: 'Partner',
			image: <StyledImg fluid={images.daniel} />,
			linkedin: 'https://www.linkedin.com/in/daniel-winther-a098751b/',
			github: 'https://github.com/indrif',
		},
		{
			name: 'Colan',
			title: 'Konsultens bästa vän',
			image: <StyledImg fluid={images.colan} />,
		},
		{
			name: 'Etimo',
			title: 'Kanske du?',
			image: <StyledImg fluid={images.etimo} />,
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
