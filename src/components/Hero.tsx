import React from 'react';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import Carousel from './Carousel';
import { HighlightButton } from './Scroller/Button';
import Section from './Section';

const Hero = styled.div<ThemeProps<DefaultTheme>>`
	max-width: 76rem;
	align-self: center;
	font-family: ${(props) => props.theme.typography.font};
	margin-right: auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 10rem;
`;

const HeroTitle = styled.div<ThemeProps<DefaultTheme>>`
	font-weight: 600;
	font-size: 4rem;
	color: ${(props) => props.theme.primary};
	padding: auto 2rem;
	vertical-align: middle;
	overflow-y: hidden;
`;

const HeroContent = styled.div`
	font-size: 1.2rem;
	color: ${(props) => props.theme.primary};
	max-width: 400px;
`;

const Splash = () => {
	return (
		<Section style={{ backgroundColor: '#F9F9F9' }}>
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
				<HighlightButton>Läs gärna vår blogg</HighlightButton>
			</Hero>
		</Section>
	);
};

export default Splash;
