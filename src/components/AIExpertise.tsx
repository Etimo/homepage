import React from 'react';
import { FadeIn, FloatUp } from '../animations';
import { AnimatedH2, Caption, P, Span } from '../elements';
import { HighlightButton } from './Button';
import Section from './Section';
import DashedP from './DashedP';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
	${tw`container mx-auto px-8 lg:px-32`}
`;

const ContentWrapper = styled.div`
	${tw`flex flex-col text-center`}
`;

const TextWrapper = styled.div`
	${tw`max-w-4xl mx-auto mt-8`}
`;

const ServiceGrid = styled.div`
	${tw`grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left`}
`;

const ServiceCard = styled.div`
	${tw`p-6 bg-gray-50 rounded-lg`}
`;

const ServiceTitle = styled.h3`
	${tw`font-quest text-xl mb-4 text-cyan`}
`;

const VideoSection = styled.div`
	${tw`flex flex-col items-center mt-12 mb-8`}
`;

const VideoWrapper = styled.div`
	${tw`relative w-full max-w-md mx-auto`}
	aspect-ratio: 1 / 1;
`;

const VideoTitle = styled.h3`
	${tw`font-quest text-2xl mb-6 text-center`}
`;

type AIExpertiseProps = {
	sectionHeight: number;
};

const aiServices = [
	{
		title: 'AI-strategi & rådgivning',
		points: [
			'Utveckla en tydlig AI-vision och roadmap för er organisation',
			'Identifiera konkreta användningsområden med hög affärsnytta',
			'Säkerställa ansvarsfull och etisk AI-implementering',
		],
	},
	{
		title: 'AI-implementation',
		points: [
			'Bygga skräddarsydda AI-lösningar med modern teknik',
			'Integrera AI i befintliga system och processer',
			'Optimera prestanda och säkerställa skalbarhet',
		],
	},
	{
		title: 'Kompetenslyft inom AI',
		points: [
			'Utbilda team i AI-grunderna och best practices',
			'Workshops om prompt engineering och AI-verktyg',
			'Bygga intern AI-kompetens för långsiktig framgång',
		],
	},
	{
		title: 'AI-innovation',
		points: [
			'Utforska nya möjligheter med generativ AI',
			'Prototyper och proof-of-concepts',
			'Kontinuerlig utvärdering av ny AI-teknik',
		],
	},
];

const AIExpertise = ({ sectionHeight }: AIExpertiseProps) => {
	return (
		<Section sectionHeight={sectionHeight} style={{ backgroundColor: '#f9f9f9' }}>
			<Container>
				<ContentWrapper>
					<FloatUp>
						<Caption>AI-expertis som gör skillnad</Caption>
					</FloatUp>
					<div className="flex flex-col md:flex-row justify-center">
						<AnimatedH2 direction="left">Framtidens </AnimatedH2>
						<AnimatedH2 direction="right">
							<Span>&nbsp;AI-lösningar</Span>
						</AnimatedH2>
					</div>
					<TextWrapper>
						<FloatUp>
							<P className="text-center">
								I en tid av snabb AI-utveckling hjälper vi er att navigera och 
								dra nytta av artificiell intelligens på ett ansvarsfullt sätt. 
								Våra erfarna AI-experter guidar er från strategi till implementation, 
								med fokus på verklig affärsnytta och hållbar innovation.
							</P>
						</FloatUp>
					</TextWrapper>
					
					<VideoSection>
						<FloatUp>
							<VideoTitle>Se vad AI kan göra för er</VideoTitle>
							<VideoWrapper>
								<video
									width="100%"
									height="100%"
									controls
									muted
									autoPlay
									playsInline
									style={{ borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
								>
									<source src="/videos/ai.mp4" type="video/mp4" />
									Din webbläsare stöder inte videouppspelning.
								</video>
							</VideoWrapper>
						</FloatUp>
					</VideoSection>
					
					<ServiceGrid>
						{aiServices.map((service, index) => (
							<FadeIn
								key={service.title}
								direction={index % 2 === 0 ? 'left' : 'right'}
							>
								<ServiceCard>
									<ServiceTitle>{service.title}</ServiceTitle>
									{service.points.map((point) => (
										<DashedP key={point} className="mb-2">
											{point}
										</DashedP>
									))}
								</ServiceCard>
							</FadeIn>
						))}
					</ServiceGrid>
					<FloatUp>
						<div className="flex justify-center mt-12">
							<HighlightButton>
								Kontakta oss för AI-rådgivning
							</HighlightButton>
						</div>
					</FloatUp>
				</ContentWrapper>
			</Container>
		</Section>
	);
};

export default AIExpertise;