import { Link } from 'gatsby';
import React from 'react';
import { FloatUp } from '../animations';
import { AnimatedH2, Caption, P, Span } from '../elements';
import { HighlightButton } from './Button';
import Section from './Section';
import Testimonials from './Testimonials';

type Props = {
	link: boolean;
	backgroundColor?: string;
	sectionHeight: number;
};

export default ({ backgroundColor, sectionHeight, link }: Props) => {
	return (
		<Section sectionHeight={sectionHeight} style={{ backgroundColor }}>
			<div className="container mx-auto xl:px-12">
				<div className="flex flex-col mb-8">
					<FloatUp>
						<Caption className="text-center">Sagt om oss</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Hur vi hjälpt</AnimatedH2>
						<AnimatedH2 direction="right">
							&nbsp;våra <Span> kunder</Span>
						</AnimatedH2>
					</div>

					<Testimonials />

					{link && (
						<div className="flex mx-auto mt-6 md:mt-10 lg:mt-12 xl:mt-20">
							<HighlightButton>
								<Link to="/tjanster">
									<P>Mer om våra tjänster</P>
								</Link>
							</HighlightButton>
						</div>
					)}
				</div>
			</div>
		</Section>
	);
};
