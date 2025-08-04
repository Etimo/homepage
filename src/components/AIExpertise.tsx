import React from 'react';
import { FadeIn, FloatUp } from '../animations';
import { AnimatedH2, Caption, H3, P, Span } from '../elements';
import { HighlightButton } from './Button';
import Section from './Section';
import styled from 'styled-components';
import tw from 'twin.macro';

const VideoWrapper = styled.div`
	${tw`relative w-full max-w-md mx-auto mt-8`}
	aspect-ratio: 1 / 1;
`;

type AIExpertiseProps = {
	sectionHeight: number;
};

const AIExpertise = ({ sectionHeight }: AIExpertiseProps) => {
	return (
		<Section sectionHeight={sectionHeight} style={{ backgroundColor: 'white' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<FloatUp>
					<Caption>AI-rådgivning</Caption>
				</FloatUp>
				<div className="flex flex-col justify-center w-11/12 md:w-3/4 mx-auto">
					<AnimatedH2 direction="left">
						Framtidens <Span>AI-lösningar</Span> för er verksamhet
					</AnimatedH2>
				</div>

				<VideoWrapper>
					<FloatUp>
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
					</FloatUp>
				</VideoWrapper>

				<div className="w-11/12 md:w-3/4 mx-auto text-center mt-12 lg:mt-12">
					<FadeIn direction="right">
						<P>
							I en tid av snabb AI-utveckling hjälper vi er att navigera och 
							dra nytta av artificiell intelligens på ett värdefullt sätt. 
							Våra erfarna AI-experter fokuserar på verklig affärsnytta istället för hype.
						</P>
						<P className="mt-4">
							Vår mest seniora AI-expert började med AI redan år 2006 och vi kan stödja
                            er på många sätt och oavsett om ni är nybörjare eller erfarna. Vi erbjuder 
							rådgivningssamtal, skräddarsydda föreläsningar, Q&A-sessioner och utvecklare.
                            Vi kan hjälpa er komma igång, eller vara med till fullständig implementation.
						</P>
					</FadeIn>

					<div className="flex justify-center mx-auto mt-6 md:mt-10 lg:mt-12 xl:mt-20">
						<HighlightButton>
							<P>Kontakta oss för AI-rådgivning</P>
						</HighlightButton>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default AIExpertise;