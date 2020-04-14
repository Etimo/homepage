import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Column, Container, Row } from '../elements';
import Carousel from './Carousel';

const Divider = styled.div`
	height: ${(props) => (props.height ? props.height : 10)}px;
	background-color: ${(props) =>
		props.color ? props.color : props.theme.secondary};
	margin-bottom: 1rem;
`;

const Hero = styled.div`
	max-width: 76rem;
	width: 100%;
	align-self: center;
	font-family: ${(props) => props.theme.typography.font};
	margin-left: 6rem;
	margin-right: 6rem;

	@media print, screen and (max-width: 45rem) {
		margin-top: 2rem;
		align-self: start;
	}
`;

const HeroTitle = styled.div`
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
`;

const Splash = () => {
	const sectionHeight = useTheme().section.height;

	return (
		<>
			<Container height={sectionHeight}>
				<Hero>
					<Row>
						<Column large={6} medium={12}>
							<div style={{ display: 'flex' }}>
								<HeroTitle>Etimo</HeroTitle>
							</div>
							<HeroContent>
								<Carousel
									items={[
										'På Etimo förenas vi av en passion för att utveckla digitala lösningar, använda modern teknik och en vilja att göra samhällsnytta.',
										'Etimo är ett snabbväxande it-konsultbolag som utvecklar skräddarsydda digitala lösningar. Vi hjälper ledande organisationer realisera affärskritiska utvecklingsprojekt.',
									]}
								/>
							</HeroContent>
						</Column>
					</Row>
				</Hero>
			</Container>
			<Container height={sectionHeight}></Container>
			<Container height={sectionHeight}></Container>
			<Container height={sectionHeight}></Container>
			<Container height={sectionHeight}></Container>

			<Divider height={10} />
		</>
	);
};

export default Splash;
