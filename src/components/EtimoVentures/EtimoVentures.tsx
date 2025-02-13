import React from 'react';
import Section from '../Section';
import { FadeIn, FloatUp } from '../../animations';
import { AnimatedH2, Caption, H3, P, Span } from '../../elements';
import { HighlightButton } from '../Button';
import { Link } from 'gatsby';

type EtimoVenturesProps = {
	sectionHeight: number;
};

export const EtimoVentures = (props: EtimoVenturesProps) => {
	const { sectionHeight } = props;
	return (
		<Section sectionHeight={sectionHeight}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<FloatUp>
					<Caption>Vår investeringsstrategi</Caption>
				</FloatUp>
				<div className="flex flex-col justify-center w-11/12 md:w-3/4 mx-auto">
					<AnimatedH2 direction="left">
						Upptäck <Span>möjligheterna</Span> med Etimo och Etimo Ventures
					</AnimatedH2>
				</div>

				<div className="w-11/12 md:w-3/4 mx-auto text-center mt-12 lg:mt-12">
					<FadeIn direction="right">
						<P>
							Hos Etimo Ventures, i samarbete med Etimo AB, är vi inte bara
							investerare - vi är partners i din framgångsresa. Vi erbjuder en
							kombination av kapital och modern teknisk kompetens för att stödja
							små växande mjukvaruföretag som delar vår vision: att skapa bättre
							mjukvara för en bättre värld.
						</P>
						<P className="mt-4">
							Vi erbjuder vi våra medarbetare möjligheten att vara med och
							investera, vilket gör dem till delägare i Etimo Ventures och
							skapar en ännu starkare koppling till din framgång.
						</P>
					</FadeIn>

					<div className="flex justify-center mx-auto mt-6 md:mt-10 lg:mt-12 xl:mt-20">
						<HighlightButton>
							<Link to="/etimo-ventures">
								<P>Mer om Etimo Ventures</P>
							</Link>
						</HighlightButton>
					</div>
				</div>
			</div>
		</Section>
	);
};
