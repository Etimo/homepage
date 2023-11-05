import { Link } from 'gatsby';
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
import useProfileImages from '../hooks/useProfileImages';

const StyledImg = styled(Img)`
	${tw`max-w-sm h-full`};
`;

const ThePeople = () => {
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
			name: 'Saga',
			title: 'Konsult',
			image: <StyledImg fluid={images.saga} />,
			linkedin: 'https://www.linkedin.com/in/sagaswahn/',
			github: 'https://github.com/hejsaga',
		},
		{
			name: 'Joakim',
			title: 'Grundare',
			image: <StyledImg fluid={images.joakim} />,
			linkedin: 'https://www.linkedin.com/in/joakim-olesen-a583181/',
			github: 'https://github.com/joakim-olesen',
		},
		{
			name: 'Malin W',
			title: 'Konsult',
			image: <StyledImg fluid={images.malinw} />,
			linkedin: 'https://www.linkedin.com/in/malin-wadholm/',
			github: 'https://github.com/wadholm',
		},
		{
			name: 'Morgan',
			title: 'Konsult',
			image: <StyledImg fluid={images.morgan} />,
			linkedin: 'https://www.linkedin.com/in/morgan-cromell/',
			github: 'https://github.com/morgan-cromell',
		},
		{
			name: 'Philip',
			title: 'Konsult',
			image: <StyledImg fluid={images.philip} />,
			linkedin: 'https://www.linkedin.com/in/philip-forsberg-b815b6134/',
			github: 'https://github.com/ForsbergPhilip',
		},
		{
			name: 'Lukas',
			title: 'Konsult',
			image: <StyledImg fluid={images.lukas} />,
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
					<EmployeeCards employees={people} employeePage={false} />

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
