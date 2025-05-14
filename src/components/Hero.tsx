import React from 'react';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';
import { FadeIn, FloatUp } from '../animations';
import { Caption } from '../elements';

const HeroTitle = styled.h1<ThemeProps<DefaultTheme>>`
	color: ${(props) => props.theme.primary};
	${tw`font-etimo mt-4 text-4xl xl:text-5xl overflow-hidden`};
`;

const Container = styled.div`
	${tw`flex justify-center`}
	background-color: #f9f9f9;
`;

const Wrapper = styled.div`
	${tw`flex my-auto flex-col mx-4 max-w-[700px] text-center -translate-y-[40%] md:-translate-y-[30%] `}
`;

const Paragraph = styled.p<ThemeProps<DefaultTheme>>`
	font-family: ${({ theme }) => theme.typography.paragraph.font};
	letter-spacing: 0.05em;
	${tw`text-blackGray leading-small lg:leading-large text-small md:text-sm`};
`;

const CyanText = styled.span`
	${tw`text-cyan`}
`;

const Splash = () => {
	return (
		<Container style={{ height: '100vh' }}>
			<Wrapper>
				<FloatUp>
					<Caption>Konsulter som levererar</Caption>
				</FloatUp>

				<HeroTitle>
					<FadeIn direction="left" className="overflow-hidden">
						Bättre mjukvara <br />
						<CyanText>för en bättre värld</CyanText>
					</FadeIn>
				</HeroTitle>
				<FadeIn direction="right">
					<Paragraph className="mt-10">
						Etimo är konsultbolaget med handplockad expertis inom utveckling och
						produkt som omvandlar komplexa tekniska utmaningar till hållbara
						affärsresultat och som bidrar till att göra samhället bättre.
					</Paragraph>
				</FadeIn>
			</Wrapper>
		</Container>
	);
};

export default Splash;
