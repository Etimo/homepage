import React from 'react';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';
import Carousel from './Carousel';
import Section from './Section';

const Hero = styled.div<ThemeProps<DefaultTheme>>`
	max-width: 76rem;
	align-self: center;
	${tw`flex flex-col mx-auto`};
	align-items: flex-start;
`;

const HeroTitle = styled.h1`
	color: ${(props) => props.theme.primary};
	${tw`font-etimo mb-8 uppercase text-4xl mx-auto md:text-8xl md:mb-4`};
`;

const HeroContent = styled.div`
	font-size: 1.2rem;
	color: ${(props) => props.theme.primary};
	max-width: 300px;
	${tw`text-center md:max-w-md`};
	height: 200px;
`;

const Splash = () => {
	return (
		<Section headerSpace style={{ backgroundColor: '#F9F9F9' }}>
			<Hero>
				<HeroTitle>Etimo</HeroTitle>
				<HeroContent>
					<Carousel
						items={[
							'På Etimo förenas vi av en passion för att utveckla digitala lösningar, använda modern teknik och en vilja att göra samhällsnytta.',
							'Etimo är ett snabbväxande it-konsultbolag som utvecklar skräddarsydda digitala lösningar. Vi hjälper ledande organisationer realisera affärskritiska utvecklingsprojekt.',
						]}
					/>
				</HeroContent>
			</Hero>
		</Section>
	);
};

export default Splash;
