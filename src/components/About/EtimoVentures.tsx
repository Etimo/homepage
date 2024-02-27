import React from 'react';
import Section from '../Section';
import { FadeIn, FloatUp } from '../../animations';
import { AnimatedH2, Caption, H3, P, Span } from '../../elements';

type EtimoVenturesProps = {
	sectionHeight: number;
};

export const EtimoVentures = (props: EtimoVenturesProps) => {
	const { sectionHeight } = props;
	return (
		<Section sectionHeight={sectionHeight}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<FloatUp>
					<Caption>Etimo Ventures</Caption>
				</FloatUp>
				<div className="flex flex-col justify-center">
					<AnimatedH2 direction="left">
						Upptäck <Span>möjligheterna</Span> med
					</AnimatedH2>
					<AnimatedH2 direction="right">Etimo Ventures och Etimo AB</AnimatedH2>
				</div>
				<div className="w-11/12 md:w-3/4 mx-auto text-left mt-12 lg:mt-12">
					<FadeIn direction="right">
						<P>
							Hos Etimo Ventures, i samarbete med Etimo AB, är vi inte bara
							investerare - vi är partners i din framgångsresa. Vi erbjuder en
							kombination av kapital och teknisk expertis för att stödja små
							växande mjukvaruföretag som delar vår vision: att skapa bättre
							mjukvara för en bättre värld.
						</P>
						<P className="mt-4">Vad gör Etimo Ventures unikt?</P>
					</FadeIn>
					<FadeIn direction="left">
						<H3 className="text-left mt-12 mb-2">Strategiskt partnerskap</H3>
						<P>
							Vi på Etimo Ventures och Etimo AB arbetar nära tillsammans för att
							erbjuda det bästa av två världar - modern teknisk kompetens och
							kapital.
						</P>
					</FadeIn>
					<FadeIn direction="right">
						<H3 className="text-left mt-12 mb-2">Gemensamma incitament</H3>
						<P>
							Vi tror på att skapa starka gemensamma incitament med våra kunder
							och partners. Därför erbjuder vi våra medarbetare möjligheten att
							vara med och investera, vilket gör dem till delägare i Etimo
							Ventures och skapar en ännu starkare koppling till din framgång.
						</P>
					</FadeIn>
					<FadeIn direction="left">
						<H3 className="text-left mt-12 mb-2">Långsiktigt partnerskap</H3>
						<P>
							Hos Etimo är vi inte ute efter snabba vinster. Vi strävar efter
							att skapa långsiktiga kundrelationer och partnerskap, där vi
							kontinuerligt stöder ditt företags tillväxt och utveckling.
						</P>
					</FadeIn>
					<FadeIn direction="right">
						<H3 className="text-left mt-12 mb-2">Investering i framtiden</H3>
						<P>
							Vi väljer noggrant ut små växande mjukvarubolag som inte bara har
							en innovativ produkt, utan också en skicklig ledning, en stabil
							ägarbild och en stark samhällsnytta. Vi är angelägna om att
							investera i bolag som delar våra värderingar och är redo att ta
							nästa steg mot framgång.
						</P>
					</FadeIn>
					<FadeIn direction="left">
						<P className="mt-12">
							Är du redo att utforska möjligheterna med Etimo Ventures och Etimo
							AB? Kontakta oss idag för att ta nästa steg på din företagsresa.
						</P>
					</FadeIn>
				</div>
			</div>
		</Section>
	);
};
