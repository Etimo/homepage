import React from 'react';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';
import { FloatInDir, FloatUp } from '../animations';
import { useViewportSize } from '../hooks';
import Carousel from './Carousel';
import Section from './Section';
import { HighlightButton } from './Button';
import { Link } from 'gatsby';

const Hero = styled.div<ThemeProps<DefaultTheme>>`
	max-width: 76rem;
	align-self: center;
	${tw`flex flex-col mx-auto overflow-hidden items-center h-25r lg:h-auto justify-center`};
`;

const HeroTitle = styled.h1`
	color: ${(props) => props.theme.primary};
	${tw`font-etimo mb-8 uppercase text-5xl mx-auto md:text-6xl lg:text-8xl md:mb-4 tracking-tight`};
`;

const HeroContent = styled.div`
	font-size: 1rem;
	color: ${(props) => props.theme.primary};

	${tw`text-center w-4/5 md:w-full mx-auto`};
	height: 200px;
`;

const items = [
	'Bättre mjukvara för en bättre värld',
	'Etimo är ett snabbväxande IT-konsultbolag som utvecklar skräddarsydda digitala lösningar.<br/>Vi hjälper ledande organisationer realisera affärskritiska utvecklingsprojekt.',
	'På Etimo förenas vi av en passion för att utveckla digitala lösningar, använda modern teknik och en vilja att göra samhällsnytta.',
];

const LinkSection = styled.div`
	${tw`flex flex-row justify-center`}
`;

const Separator = styled.span`
	color: ${(props) => props.theme.primary};
	font-size: 1.2em;
	margin: 0 10px;
`;

const Space = styled.div`
	width: 10px;
`;

const Splash = () => {
	const [h, width] = useViewportSize();

	return (
		<Section headerSpace style={{ backgroundColor: '#F9F9F9' }}>
			<Hero>
				<FloatInDir
					className="flex"
					style={{ height: '140px' }}
					direction="down"
				>
					<HeroTitle>Etimo</HeroTitle>
				</FloatInDir>
				<FloatUp>
					<HeroContent>
						<Carousel items={items} />
					</HeroContent>

					<LinkSection>
						<HighlightButton>
							<Link to="/kunder-och-expertis">Kunder</Link>
						</HighlightButton>
						<Space />
						<Separator>|</Separator>
						<Space />
						<HighlightButton>
							<Link to="/karriar">Karriär</Link>
						</HighlightButton>
					</LinkSection>
				</FloatUp>
			</Hero>
		</Section>
	);
};

export default Splash;
