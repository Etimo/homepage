import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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

const imageClassName = 'max-w-sm h-full';

const ThePeople = () => {
	const images = useProfileImages();

	const people = [
		{
			name: 'Björn',
			title: 'Konsult',
			image: (
				<GatsbyImage
					className={imageClassName}
					image={images.bjorn}
					alt="Björn"
				/>
			),
			linkedin: 'https://www.linkedin.com/in/bj%C3%B6rn-wahlberg-68b59020/',
			github: 'https://github.com/bjornkonrad',
		},
		{
			name: 'Jeanette',
			title: 'VD',
			image: <GatsbyImage image={images.jeanette} alt="Jeanette" />,
			linkedin: 'https://www.linkedin.com/in/jeanettebritan/',
		},
		{
			name: 'Saga',
			title: 'Konsult',
			image: <GatsbyImage image={images.saga} alt="Saga" />,
			linkedin: 'https://www.linkedin.com/in/sagaswahn/',
			github: 'https://github.com/hejsaga',
		},
		{
			name: 'Joakim',
			title: 'Grundare',
			image: <GatsbyImage image={images.joakim} alt="Joakim" />,
			linkedin: 'https://www.linkedin.com/in/joakim-olesen-a583181/',
			github: 'https://github.com/joakim-olesen',
		},
		{
			name: 'Malin W',
			title: 'Konsult',
			image: <GatsbyImage image={images.malinw} alt="Malin W" />,
			linkedin: 'https://www.linkedin.com/in/malin-wadholm/',
			github: 'https://github.com/wadholm',
		},
		{
			name: 'Morgan',
			title: 'Konsult',
			image: <GatsbyImage image={images.morgan} alt="Morgan" />,
			linkedin: 'https://www.linkedin.com/in/morgan-cromell/',
			github: 'https://github.com/morgan-cromell',
		},
		{
			name: 'Philip',
			title: 'Konsult',
			image: <GatsbyImage image={images.philip} alt="Morgan" />,
			linkedin: 'https://www.linkedin.com/in/philip-forsberg-b815b6134/',
			github: 'https://github.com/ForsbergPhilip',
		},
		{
			name: 'Lukas',
			title: 'Konsult',
			image: <GatsbyImage image={images.lukas} alt="Lukas" />,
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
							<Span>&nbsp;oss</Span>
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
