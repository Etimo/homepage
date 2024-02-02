import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import FloatUp from '../../animations/FloatUp';
import AnimatedH2 from '../../elements/AnimatedH2';
import Caption from '../../elements/Caption';
import Span from '../../elements/Span';
import EmployeeCards from './EmployeeCards';
import useProfileImages from '../../hooks/useProfileImages';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledImg = styled(GatsbyImage)`
	${tw`max-w-sm h-full`};
`;

const AllPeople = () => {
	const images = useProfileImages();

	const people = [
		{
			name: 'Björn',
			title: 'Konsult',
			image: <StyledImg image={images.bjorn} alt="Björn" />,
			linkedin: 'https://www.linkedin.com/in/bj%C3%B6rn-wahlberg-68b59020/',
			github: 'https://github.com/bjornkonrad',
		},
		{
			name: 'Jeanette',
			title: 'VD',
			image: <StyledImg image={images.jeanette} alt="Jeanette" />,
			linkedin: 'https://www.linkedin.com/in/jeanettebritan/',
		},
		{
			name: 'Erik',
			title: 'Partner',
			image: <StyledImg image={images.erik} alt="Erik" />,
			linkedin: 'https://www.linkedin.com/in/erik-malm-1343662/',
			github: 'https://github.com/sirscratchalot',
		},
		{
			name: 'Joakim',
			title: 'Grundare',
			image: <StyledImg image={images.joakim} alt="Joakim" />,
			linkedin: 'https://www.linkedin.com/in/joakim-olesen-a583181/',
			github: 'https://github.com/joakim-olesen',
		},
		{
			name: 'Morgan',
			title: 'Konsult',
			image: <StyledImg image={images.morgan} alt="Morgan" />,
			linkedin: 'https://www.linkedin.com/in/morgan-cromell/',
			github: 'https://github.com/morgan-cromell',
		},
		{
			name: 'Malin W',
			title: 'Konsult',
			image: <StyledImg image={images.malinw} alt="Malin W" />,
			linkedin: 'https://www.linkedin.com/in/malin-wadholm/',
			github: 'https://github.com/wadholm',
		},
		{
			name: 'Johan',
			title: 'Medgrundare',
			image: <StyledImg image={images.johan} alt="Johan" />,
			linkedin: 'https://www.linkedin.com/in/johan-hazelius-910b281a/',
			github: 'https://github.com/JohanHazelius',
		},
		{
			name: 'Lukas',
			title: 'Konsult',
			image: <StyledImg image={images.lukas} alt="Lukas" />,
			linkedin: 'https://www.linkedin.com/in/lukas-lindqvist/',
			github: 'https://github.com/ljukas',
		},
		{
			name: 'Philip',
			title: 'Konsult',
			image: <StyledImg image={images.philip} alt="Philip" />,
			linkedin: 'https://www.linkedin.com/in/philip-forsberg-b815b6134/',
			github: 'https://github.com/ForsbergPhilip',
		},
		{
			name: 'André',
			title: 'Konsult',
			image: <StyledImg image={images.andre} alt="André" />,
			linkedin: 'https://www.linkedin.com/in/andr%C3%A9-hansson-5b6418128/',
			github: 'https://github.com/H4zze',
		},
		{
			name: 'Klara',
			title: 'Konsult',
			image: <StyledImg image={images.klara} alt="Klara" />,
			linkedin: 'https://www.linkedin.com/in/klara-djurberg-889853127/',
			github: 'https://github.com/klaradj',
		},
		{
			name: 'Henrik',
			title: 'Konsult',
			image: <StyledImg image={images.henrik} alt="Henrik" />,
			linkedin:
				'https://www.linkedin.com/in/henrik-west%C3%B6%C3%B6-66150419a/',
			github: 'https://github.com/henrik-westoo',
		},
		{
			name: 'Saga',
			title: 'Konsult',
			image: <StyledImg image={images.saga} alt="Saga" />,
			linkedin: 'https://www.linkedin.com/in/sagaswahn/',
			github: 'https://github.com/hejsaga',
		},
		{
			name: 'Daniel',
			title: 'Partner',
			image: <StyledImg image={images.daniel} alt="Daniel" />,
			linkedin: 'https://www.linkedin.com/in/daniel-winther-a098751b/',
			github: 'https://github.com/indrif',
		},
		{
			name: 'Colan',
			title: 'Konsultens bästa vän',
			image: <StyledImg image={images.colan} alt="Colan" />,
		},
		{
			name: 'Malin Lindbom',
			title: 'Produktledning',
			image: <StyledImg image={images.malinl} alt="Malin" />,
			linkedin: 'https://www.linkedin.com/in/malin-lindbom-60a13a65/',
		},
	];

	return (
		<div className="container mx-auto mb-16 xl:px-12 lg:h-full lg:overflow-hidden">
			<div className="flex flex-col mb-16 lg:h-95 lg:max-h-95 lg:justify-center lg:items-center">
				<FloatUp>
					<Caption className="text-center">Människorna</Caption>
				</FloatUp>
				<div className="flex flex-row justify-center mb-8">
					<AnimatedH2 direction="left">Vi är</AnimatedH2>
					<AnimatedH2 direction="right">
						<Span>&nbsp;Etimo</Span>
					</AnimatedH2>
				</div>
				<EmployeeCards employees={people} employeePage={true} />
			</div>
		</div>
	);
};

export default AllPeople;
