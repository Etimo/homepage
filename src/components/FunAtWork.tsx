import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FloatUp from '../animations/FloatUp';
import AnimatedH2 from '../elements/AnimatedH2';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import P from '../elements/P';
import Span from '../elements/Span';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import EmployeeCard from './EmployeeCard';
import { Employee } from './EmployeeCards';
import Section from './Section';

const StyledImg = styled(Img)`
	${tw`max-w-sm h-full`};
`;

const SmallerH2 = styled(H2)`
	${tw`text-xl mt-1 tracking-widest`};
`;

const SpacedP = styled(P)`
	${tw`tracking-widest pb-2`};
`;

export default () => {
	const data = useStaticQuery(graphql`
		query {
			daniel: file(
				relativePath: { eq: "funatwork/new/daniel.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			are: file(relativePath: { eq: "funatwork/new/are.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			bradspel: file(
				relativePath: { eq: "funatwork/new/bradspel.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			afterski: file(
				relativePath: { eq: "funatwork/new/afterski.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			jassyr: file(
				relativePath: { eq: "funatwork/new/jassyr.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			vaxholm: file(
				relativePath: { eq: "funatwork/new/vaxholm.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const cards: Employee[] = [
		{
			name: 'DANIEL',
			title: 'Njuter i backen',
			image: <StyledImg fluid={data.daniel.childImageSharp.fluid} />,
		},
		{
			name: 'BJÖRN OCH JOHAN',
			title: 'Samtalar i solen',
			image: <StyledImg fluid={data.are.childImageSharp.fluid} />,
		},
		{
			name: 'KOLLEGOR',
			title: 'På pit stop i Åre',
			image: <StyledImg fluid={data.afterski.childImageSharp.fluid} />,
		},
		{
			name: 'GÄNGET',
			title: 'Morgan vinner brädspelskvällen',
			image: <StyledImg fluid={data.bradspel.childImageSharp.fluid} />,
		},
		
		{
			name: 'JASSYR',
			title: 'Vidgar vyerna på Island',
			image: <StyledImg fluid={data.jassyr.childImageSharp.fluid} />,
		},
		
		{
			name: 'TEAMBUILDING',
			title: 'Klurigt i Vaxholm',
			image: <StyledImg fluid={data.vaxholm.childImageSharp.fluid} />,
		},
	];

	const [h, width] = useViewportSize();

	/* 6:1 until sm then 3x2 until md then 2x3*/
	/* banners up until lg, lg+ uses hover */
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container xl:px-12">
				<div className="flex flex-col text-center overflow-hidden">
					<FloatUp>
						<Caption>Kul</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">
							Kul <Span secondary>på</Span>
						</AnimatedH2>
						<AnimatedH2 direction="right">
							<Span secondary>&nbsp;jobbet</Span>
						</AnimatedH2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 mx-4 sm:mx-8 xl:mx-20 gap-8 lg:self-auto overflow-hidden">
						{width >= sizes().laptop &&
							/* Hover effect */
							cards.map((card) => <EmployeeCard {...card} key={card.name} />)}

						{width < sizes().laptop &&
							/* Banners */
							cards.map((card) => {
								return (
									<FloatUp>
										<div className="flex flex-col max-w-sm mx-auto">
											{card.image}
											<div className="bg-cyan px-3">
												<SmallerH2>{card.name}</SmallerH2>
												<SpacedP>{card.title}</SpacedP>
											</div>
										</div>
									</FloatUp>
								);
							})}
					</div>
				</div>
			</div>
		</Section>
	);
};
