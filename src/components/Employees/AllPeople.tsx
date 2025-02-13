import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import FloatUp from '../../animations/FloatUp';
import AnimatedH2 from '../../elements/AnimatedH2';
import Caption from '../../elements/Caption';
import Span from '../../elements/Span';
import EmployeeCards from './EmployeeCards';
import Section from '../Section';
import useProfileImages from '../../hooks/useProfileImages';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledImg = styled(GatsbyImage)`
	${tw`max-w-sm h-full`};
`;

type AllPeopleProps = {
	sectionHeight: number;
};

const AllPeople = (props: AllPeopleProps) => {
	const sectionHeight = props.sectionHeight;
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
			name: 'Colan',
			title: 'Konsultens bästa vän',
			image: <StyledImg image={images.colan} alt="dog" />,
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
			name: 'Daniel',
			title: 'Partner',
			image: <StyledImg image={images.daniel} alt="Daniel" />,
			linkedin: 'https://www.linkedin.com/in/daniel-winther-a098751b/',
			github: 'https://github.com/indrif',
		},
		{
			name: 'Malin Lindbom',
			title: 'Produktledning',
			image: <StyledImg image={images.malinl} alt="Malin" />,
			linkedin: 'https://www.linkedin.com/in/malin-lindbom-60a13a65/',
		},

		{
			name: 'Saga',
			title: 'Konsult',
			image: <StyledImg image={images.saga} alt="Saga" />,
			linkedin: 'https://www.linkedin.com/in/sagaswahn/',
			github: 'https://github.com/hejsaga',
		},
		{
			name: 'Etimo',
			title: 'Kanske du?',
			image: <StyledImg image={images.etimo} alt="Etimo" />,
			linkedin: 'https://www.linkedin.com/company/5032461',
			github: 'https://github.com/etimo',
		},
	];

	return (
		<Section sectionHeight={sectionHeight}>
			<div className="container mx-auto xl:px-12 lg:h-full lg:overflow-hidden">
				<div className="flex flex-col mb-8 lg:h-95 lg:max-h-95 lg:justify-center lg:items-center">
					<FloatUp>
						<Caption className="text-center">Kollegorna</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Vi är</AnimatedH2>
						<AnimatedH2 direction="right">
							<Span>&nbsp;Etimo</Span>
						</AnimatedH2>
					</div>
					<EmployeeCards employees={people} employeePage={true} />
				</div>
			</div>
		</Section>
	);
};

export default AllPeople;
